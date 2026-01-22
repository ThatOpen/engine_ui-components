import { TemplateResult } from "lit";

/**
 * Represents a function that returns a TemplateResult for a stateless component.
 *
 * @returns A TemplateResult that represents the UI of the component.
 */
export type StatelessComponent = () => TemplateResult;

export type UpdateFunction<S extends Record<string, any>> = (
  state?: Partial<S>,
) => S;

/**
 * Represents a function that returns a TemplateResult for a stateful component.
 *
 * @template S - The type of the component state.
 *
 * @param state - The current state of the component.
 * @param update - An update function you can call inside the template.
 * WARNING! It can cause infinite loops if not used properly.
 *
 * @returns A TemplateResult that represents the UI of the component based on the current state.
 */
export type StatefullComponent<
  S extends Record<string, any> = Record<string, any>,
  > = (state: S, update: UpdateFunction<S>) => TemplateResult;

/**
 * Utility interface providing methods for component state and element management.
 */
export interface ComponentUtils<S> {
  getElement: <T extends Element = Element>(name: string) => T | null;
  getCurrentState: () => S;
  dispose: () => void;
  updates: Record<string, UpdateFunction<Record<string, any>>>
}