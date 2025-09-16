import {
  StatefullComponent,
  StatelessComponent,
} from "../../../core/Component";

type ExtractName<T> = T extends { name: infer N extends string } ? N : T;
type ExtractState<T> = T extends {
  state: infer N extends Record<string, any>;
}
  ? N
  : never;

type ExtractStateByElement<T, U> = T extends {
  name: U;
  state: infer N extends Record<string, any>;
}
  ? N
  : never;

export type GridComponentDefinition = (
  | string
  | { name: string; state: Record<string, any> }
)[];

export type GridComponents<T extends GridComponentDefinition> = {
  [P in ExtractName<T[number]>]?:
    | HTMLElement
    | StatelessComponent
    | {
        template: StatefullComponent<ExtractStateByElement<T[number], P>>;
        initialState: ExtractStateByElement<T[number], P>;
      };
};

/**
   Represents a collection of predefined grid layouts for the Grid component. Each layout is defined by a unique name, a grid template string, and a map of area names to HTMLElement instances. The grid template string defines the structure of the grid, and the area names correspond to the grid-area property of the HTMLElement instances. The HTMLElement instances are used to populate the grid with content.
   */
export type GridLayoutsDefinition<
  L extends string[],
  E extends GridComponentDefinition,
> = {
  [K in L[number]]: {
    template: string;
    icon?: string;
    elements?: GridComponents<E>;
  };
};

export type UpdateGridComponents<T extends GridComponentDefinition> = {
  [K in keyof T as T[K] extends GridComponentDefinition[number]
    ? T[K] extends { name: infer N extends string }
      ? N
      : never
    : never]: (
    state?: Partial<
      ExtractState<T[K] extends GridComponentDefinition[number] ? T[K] : never>
    >,
  ) => void;
};
