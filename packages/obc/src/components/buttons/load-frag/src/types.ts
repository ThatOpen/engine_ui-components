import * as OBC from "@thatopen/components";

/**
 * Interface representing the state of the LoadIfcUI component. It contains a reference to the Components object from the @thatopen/components library.
 */
export interface LoadFragState {
  components: OBC.Components;
  world?: OBC.World;
}
