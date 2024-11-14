import {
  StatefullComponent,
  StatelessComponent,
} from "../../../core/Component";

export interface GridLayoutComponents {
  [key: string]: (string | { name: string; state: Record<string, any> })[];
}

type ExtractName<T> = T extends { name: infer N extends string } ? N : T;
type ExtractState<T> = T extends {
  state: infer N extends Record<string, any>;
}
  ? N
  : never;

/**
 Represents a collection of predefined grid layouts for the Grid component. Each layout is defined by a unique name, a grid template string, and a map of area names to HTMLElement instances. The grid template string defines the structure of the grid, and the area names correspond to the grid-area property of the HTMLElement instances. The HTMLElement instances are used to populate the grid with content.
 */
export type GridLayoutsDefinition<T extends GridLayoutComponents> = {
  [K in keyof T]: {
    template: string;
    elements: {
      [P in ExtractName<T[K][number]>]?:
        | HTMLElement
        | StatelessComponent
        | {
            template: StatefullComponent<any>;
            initialState: ExtractState<T[K][number]>;
          };
    };
  };
};

export type UpdateGridLayoutElements<T extends GridLayoutComponents> = {
  [K in keyof T as {
    [P in T[K][number] as P extends { name: infer N } ? N : never]: (
      state?: Partial<ExtractState<P>>,
    ) => void;
  } extends infer U
    ? keyof U extends never
      ? never
      : K
    : never]: {
    [P in T[K][number] as P extends { name: infer N } ? N : never]: (
      state?: Partial<ExtractState<P>>,
    ) => void;
  };
};
