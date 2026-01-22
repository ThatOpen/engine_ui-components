/* eslint-disable no-dupe-class-members */
import { LitElement, render } from "lit";
import { ComponentUtils, StatefullComponent, StatelessComponent, UpdateFunction } from "./src";
import { Manager } from "../Manager";

/**
 * A base class for UI components that utilizes the LitElement library. Provides functionality for rendering stateless and stateful components, as well as lazy loading of elements using Intersection Observer.
 */
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

  /**
   * Creates a new UI component instance based on the provided template and initial state.
   *
   * @template T - The type of the UI component element.
   * @template S - The type of the component state.
   *
   * @param template - The stateful component template function.
   * @param state - The initial state of the component.
   * @returns An array containing the created UI component element and a function to update its state.
   */
  static create<T extends HTMLElement, S extends Record<string, any>>(
    template: StatefullComponent<S>,
    state: S,
  ): [element: T, update: UpdateFunction<S>, utils: ComponentUtils<S>];

  /**
   * Creates a new UI component instance based on the provided template and initial state.
   *
   * @template T - The type of the UI component element.
   * @template S - The type of the component state.
   *
   * @param template - The stateless component template function.
   * @returns The created UI component element.
   */
  static create<T extends HTMLElement>(template: StatelessComponent): T;

  /**
   * Creates a new UI component instance based on the provided template and initial state.
   *
   * @template T - The type of the UI component element.
   * @template S - The type of the component state.
   *
   * @param template - The component template function (stateless or stateful).
   * @param initialState - The initial state of the component (optional for stateless components).
   * @returns The created UI component element or an array containing the element and a function to update its state.
   */
  static create<T extends HTMLElement, S extends Record<string, any>>(
    template: StatefullComponent<S> | StatelessComponent,
    initialState?: S,
  ): T | [element: T, update: UpdateFunction<S>, utils: ComponentUtils<S>] {
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
    const update: UpdateFunction<S> = (state?: Partial<S>) => {
      currentState = { ...currentState, ...state };
      render(statefullTemplate(currentState, update), fragment);
      return currentState;
    };

    update(initialState);
    const element = fragment.firstElementChild as unknown as T;
    const utils: ComponentUtils<S> = {
      getElement: <T extends Element = Element>(name: string) => {
        return element.querySelector<T>(`[data-${Manager.config.internalComponentNameAttribute}="${name}"]`)
      },
      getCurrentState: () => currentState,
      dispose: () => {
        element.remove();
        (currentState as any) = {}
        utils.updates = {}
      },
      updates: {}
    }

    return [element, update, utils];
  }
}

export * from "./src"