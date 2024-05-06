/* eslint-disable no-dupe-class-members */
import { LitElement, TemplateResult, render } from "lit";

export type StatelessComponent = () => TemplateResult;

export type StatefullComponent<S extends Record<string, any>> = (
  state: S,
) => TemplateResult;

type UpdateFunction<S extends Record<string, any>> = (state?: Partial<S>) => S;

export class Component extends LitElement {
  private _lazyLoadObserver: IntersectionObserver | null = null;
  private _visibleElements: HTMLElement[] = [];

  protected ELEMENTS_BEFORE_OBSERVER = 20;
  protected useObserver = false;
  protected elements: Set<HTMLElement> = new Set();

  protected set visibleElements(value: HTMLElement[]) {
    this._visibleElements = this.useObserver ? value : [];
    this.requestUpdate();
  }

  protected get visibleElements() {
    return this._visibleElements;
  }

  private getLazyObserver() {
    if (!this.useObserver) return null;
    if (this._lazyLoadObserver) return this._lazyLoadObserver;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting) return;
        const option = entry.target;
        observer.unobserve(option);
        const visibleElementsCount =
          this.ELEMENTS_BEFORE_OBSERVER + this.visibleElements.length;
        const newOption = [...this.elements][visibleElementsCount];
        if (newOption) {
          this.visibleElements = [...this.visibleElements, newOption];
          observer.observe(newOption);
        }
      },
      { threshold: 0.5 },
    );

    return observer;
  }

  private observeLastElement() {
    const observer = this.getLazyObserver();
    if (!observer) return;
    const index =
      this.ELEMENTS_BEFORE_OBSERVER + this.visibleElements.length - 1;
    const lastElement = [...this.elements][index];
    if (lastElement) observer.observe(lastElement);
  }

  protected resetVisibleElements() {
    const observer = this.getLazyObserver();
    if (!observer) return;
    for (const option of this.elements) {
      observer.unobserve(option);
    }
    this.visibleElements = [];
    this.observeLastElement();
  }

  protected observe = (elements: HTMLElement[]) => {
    if (!this.useObserver) return;
    for (const element of elements) this.elements.add(element);
    const elementsToRemove = elements.slice(this.ELEMENTS_BEFORE_OBSERVER);
    for (const element of elementsToRemove) element.remove();
    this.observeLastElement();
  };

  static create<T extends HTMLElement, S extends Record<string, any>>(
    template: StatefullComponent<S>,
    state: S,
  ): [element: T, update: UpdateFunction<S>];

  static create<T extends HTMLElement>(template: StatelessComponent): T;

  static create<T extends HTMLElement, S extends Record<string, any>>(
    template: StatefullComponent<S> | StatelessComponent,
    initialState?: S,
  ): T | [element: T, update: UpdateFunction<S>] {
    const fragment = document.createDocumentFragment();

    if (template.length === 0) {
      const statelessTemplate = template as StatelessComponent;
      render(statelessTemplate(), fragment);
      const element = fragment.firstElementChild as unknown as T;
      return element;
    }

    if (!initialState)
      throw new Error(
        "UIComponent: Initial state is required for statefull components.",
      );

    let currentState = initialState;

    const statefullTemplate = template as StatefullComponent<S>;
    const update = (state?: Partial<S>) => {
      currentState = { ...currentState, ...state };
      render(statefullTemplate(currentState), fragment);
      return currentState;
    };

    update(initialState);
    const element = fragment.firstElementChild as unknown as T;
    return [element, update];
  }
}
