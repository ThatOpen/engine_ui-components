// import * as OBC from "@thatopen/components";
// import * as BUI from "@thatopen/ui";

// export interface FragmentExploderUIState {
//   exploder: OBC.FragmentExploder;
// }

// const template = (state: FragmentExploderUIState) => {
//   const { exploder } = state;

//   const onBtnClick = () => {
//     if (exploder.enabled) {
//       exploder.reset();
//     } else {
//       exploder.explode();
//     }
//   };

//   return BUI.html`
//     <bim-button
//       label="Explode"
//       icon="icon-park-solid:split-branch"
//       @click=${onBtnClick}
//     ></bim-button>
//   `;
// };

// export const fragmentExploder = (state: FragmentExploderUIState) => {
//   const [fragmentExploderBtn] = BUI.Component.create<
//     BUI.Button,
//     FragmentExploderUIState
//   >(template, state);

//   return fragmentExploderBtn;
// };
