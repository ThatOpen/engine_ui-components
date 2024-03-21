/* eslint-disable no-dupe-class-members */
import { LitElement, TemplateResult, render } from "lit";

export type StatelessComponent<T extends HTMLElement> = (
  Root?: T,
) => TemplateResult;

export type StatefullComponent<
  S extends Record<string, any>,
  T extends HTMLElement,
> = (state: S, Root?: T) => TemplateResult;

export type UpdateFunction<T extends Record<string, any>> = (state: T) => void;

export class UIComponent extends LitElement {
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

  static create<T extends HTMLElement, U extends Record<string, any>>(
    template: StatefullComponent<U, T>,
    state: U,
  ): [element: T, update: UpdateFunction<U>];

  static create<T extends HTMLElement>(template: StatelessComponent<T>): T;

  static create<T extends HTMLElement, U extends Record<string, any>>(
    template: StatefullComponent<U, T> | StatelessComponent<T>,
    initialState?: U,
  ): T | [element: T, update: UpdateFunction<U>] {
    if (template.length > 0 && typeof initialState === "undefined") {
      throw new Error("Initial state is required for statefull components");
    }

    const fragment = document.createDocumentFragment();

    if (template.length === 0) {
      const statelessTemplate = template as StatelessComponent<T>;
      render(statelessTemplate(), fragment);
      const element = fragment.firstElementChild as unknown as T;
      return element;
    }

    const statefullTemplate = template as StatefullComponent<U, T>;
    const update = (state: U) => {
      render(statefullTemplate(state), fragment);
    };

    update(initialState as U);
    const element = fragment.firstElementChild as unknown as T;
    return [element, update];
  }

  getInnerElement<T extends HTMLElement = HTMLElement>(id: string) {
    const element = this.querySelector<T>(`[data-ui-id='${id}']`);
    if (!element) {
      throw new Error(
        `There is no element with attribute data-ui-id='${id}' in this UIComponent.`,
      );
    }
    return element;
  }
}
