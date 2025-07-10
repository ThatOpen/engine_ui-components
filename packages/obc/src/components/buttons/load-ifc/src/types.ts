import * as OBC from "@thatopen/components";

/**
 * Interface representing the state of the LoadIfcUI component. It contains a reference to the Components object from the @thatopen/components library.
 */
export interface LoadIfcState {
  components: OBC.Components;
  worldName?: string;
  modelUserData?: Record<string, any>;
}
