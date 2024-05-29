import * as BUI from "@thatopen/ui";
import * as THREE from "three";
import * as OBC from "@thatopen/components";
import * as OBF from "@thatopen/components-front";

// TODO: Refactor to remove redundancy

/**
 * Heloooooooooo
 */
export interface WorldsConfigurationUIState {
  components: OBC.Components;
}

const createNearFrustumInput = (
  camera: OBC.BaseCamera,
  defaultValue: number,
) => {
  const onInputChange = (e: Event) => {
    const input = e.target as BUI.NumberInput;
    if (camera.three instanceof THREE.PerspectiveCamera) {
      camera.three.near = input.value;
      camera.three.updateProjectionMatrix();
    }
  };
  return BUI.html`
    <bim-number-input @change=${onInputChange} min="0.1" value=${defaultValue} max="10" step="0.1" slider></bim-number-input>
  `;
};

const createFarFrustumInput = (
  camera: OBC.BaseCamera,
  defaultValue: number,
) => {
  const onInputChange = (e: Event) => {
    const input = e.target as BUI.NumberInput;
    if (camera.three instanceof THREE.PerspectiveCamera) {
      camera.three.far = input.value;
      camera.three.updateProjectionMatrix();
    }
  };
  return BUI.html`
    <bim-number-input @change=${onInputChange} min="300" value=${defaultValue} max="2000" step="10" slider></bim-number-input>
  `;
};

const createFovInput = (camera: OBC.BaseCamera, defaultValue: number) => {
  const onInputChange = (e: Event) => {
    const input = e.target as BUI.NumberInput;
    if (camera.three instanceof THREE.PerspectiveCamera) {
      camera.three.fov = input.value;
      camera.three.updateProjectionMatrix();
    }
  };
  return BUI.html`
    <bim-number-input @change=${onInputChange} min="10" value=${defaultValue} max="120" slider></bim-number-input>
  `;
};

const createInvertDragInput = (
  camera: OBC.BaseCamera,
  defaultValue: boolean,
) => {
  if (!camera.hasCameraControls()) return defaultValue;
  const { controls } = camera;
  const onInputChange = (e: Event) => {
    const input = e.target as BUI.Checkbox;
    controls.dollyDragInverted = input.checked;
  };
  return BUI.html`
    <bim-checkbox @change=${onInputChange} .checked=${defaultValue}></bim-checkbox>
  `;
};

const createDollySpeedInput = (
  camera: OBC.BaseCamera,
  defaultValue: number,
) => {
  if (!camera.hasCameraControls()) return defaultValue;
  const { controls } = camera;
  const onInputChange = (e: Event) => {
    const input = e.target as BUI.NumberInput;
    controls.dollySpeed = input.value;
  };
  return BUI.html`
    <bim-number-input @change=${onInputChange} min="0.5" value=${defaultValue} max="3" step="0.1" slider></bim-number-input>
  `;
};

const createTruckSpeedInput = (
  camera: OBC.BaseCamera,
  defaultValue: number,
) => {
  if (!camera.hasCameraControls()) return defaultValue;
  const { controls } = camera;
  const onInputChange = (e: Event) => {
    const input = e.target as BUI.NumberInput;
    controls.truckSpeed = input.value;
  };
  return BUI.html`
    <bim-number-input @change=${onInputChange} min="0.5" value=${defaultValue} max="6" step="0.1" slider></bim-number-input>
  `;
};

const createSmoothTimeInput = (
  camera: OBC.BaseCamera,
  defaultValue: number,
) => {
  if (!camera.hasCameraControls()) return defaultValue;
  const { controls } = camera;
  const onInputChange = (e: Event) => {
    const input = e.target as BUI.NumberInput;
    controls.smoothTime = input.value;
  };
  return BUI.html`
    <bim-number-input @change=${onInputChange} min="0.01" value=${defaultValue} max="2" step="0.01" slider></bim-number-input>
  `;
};

const createLightIntensityInput = (
  light: THREE.Light,
  defaultValue: number,
) => {
  const onInputChange = (e: Event) => {
    const input = e.target as BUI.NumberInput;
    light.intensity = input.value;
  };
  return BUI.html`
    <bim-number-input @change=${onInputChange} min="0" value=${defaultValue} max="10" step="0.1" slider></bim-number-input>
  `;
};

const createLightColorInput = (light: THREE.Light, defaultValue: string) => {
  const onInputChange = (e: Event) => {
    const input = e.target as BUI.ColorInput;
    light.color = new THREE.Color(input.color);
  };
  return BUI.html`
    <bim-color-input @input=${onInputChange} color=${defaultValue}></bim-color-input>
  `;
};

const createAOColorInput = (
  renderer: OBF.PostproductionRenderer,
  defaultValue: string,
) => {
  const { postproduction } = renderer;
  const ao = postproduction.n8ao.configuration;
  const onInputChange = (e: Event) => {
    const input = e.target as BUI.ColorInput;
    ao.color = new THREE.Color(input.color);
  };
  return BUI.html`
    <bim-color-input @input=${onInputChange} color=${defaultValue}></bim-color-input>
  `;
};

const createAOEnabledInput = (
  renderer: OBF.PostproductionRenderer,
  defaultValue: boolean,
) => {
  const { postproduction } = renderer;
  const onInputChange = (e: Event) => {
    const input = e.target as BUI.Checkbox;
    postproduction.setPasses({ ao: input.checked });
  };
  return BUI.html`
    <bim-checkbox @change=${onInputChange} .checked=${defaultValue}></bim-checkbox>
  `;
};

/**
 * Heloooooooooo
 */
export const worldsConfigurationTemplate = (
  state: WorldsConfigurationUIState,
) => {
  const { components } = state;
  const worlds = components.get(OBC.Worlds);

  const onTableCreated = async (element?: Element) => {
    if (!element) return;

    const table = element as BUI.Table;
    table.preserveStructureOnFilter = true;

    table.dataTransform = {
      Value: (value, data) => {
        const worldID = data.World as string;
        const world = worlds.list.get(worldID);
        if (!world) return value;
        const { scene, camera, renderer } = world;
        const configName = data.Name as string;
        if (configName === "Near Frustum" && typeof value === "number") {
          return createNearFrustumInput(camera, value);
        }
        if (configName === "Far Frustum" && typeof value === "number") {
          return createFarFrustumInput(camera, value);
        }
        if (configName === "Field of View" && typeof value === "number") {
          return createFovInput(camera, value);
        }
        if (configName === "Invert Drag" && typeof value === "boolean") {
          return createInvertDragInput(camera, value);
        }
        if (configName === "Dolly Speed" && typeof value === "number") {
          return createDollySpeedInput(camera, value);
        }
        if (configName === "Truck Speed" && typeof value === "number") {
          return createTruckSpeedInput(camera, value);
        }
        if (configName === "Smooth Time" && typeof value === "number") {
          return createSmoothTimeInput(camera, value);
        }
        if (configName === "Intensity" && typeof value === "number") {
          const lightID = data.Light as string;
          const light = scene.three.children.find(
            (child) => child.uuid === lightID,
          );
          if (!(light && light instanceof THREE.Light)) return value;
          return createLightIntensityInput(light, value);
        }
        if (configName === "Color" && typeof value === "string") {
          const lightID = data.Light as string;
          const light = scene.three.children.find(
            (child) => child.uuid === lightID,
          );
          if (light && light instanceof THREE.Light) {
            return createLightColorInput(light, value);
          }
          if (
            data.IsAOConfig &&
            renderer instanceof OBF.PostproductionRenderer
          ) {
            return createAOColorInput(renderer, value);
          }
        }
        if (configName === "Enabled" && typeof value === "boolean") {
          if (
            data.IsAOConfig &&
            renderer instanceof OBF.PostproductionRenderer
          ) {
            return createAOEnabledInput(renderer, value);
          }
        }
        return value;
      },
    };

    table.addEventListener("cellcreated", ({ detail }) => {
      const parent = detail.cell.parentNode;
      if (!parent) return;
      const nameCell = parent.querySelector<BUI.TableCell>(
        "bim-table-cell[column='Name']",
      );
      const valueCell = parent.querySelector<BUI.TableCell>(
        "bim-table-cell[column='Value']",
      );
      if (!valueCell?.data && nameCell) {
        nameCell.style.gridColumn = "1 / -1";
      }
    });

    const rows: BUI.TableGroupData[] = [];

    for (const [, world] of worlds.list) {
      const { scene, camera, renderer } = world;
      const row: BUI.TableGroupData = {
        data: {
          Name: world.uuid,
        },
        children: [],
      };
      if (scene) {
        const sceneRow: BUI.TableGroupData = {
          data: {
            Name: "Scene",
          },
        };
        const directionalLights = scene.three.children.filter(
          (child) => child instanceof THREE.DirectionalLight,
        ) as THREE.DirectionalLight[];
        for (const light of directionalLights) {
          const lightRow: BUI.TableGroupData = {
            data: {
              Name: "Directional Light",
            },
            children: [
              {
                data: {
                  Name: "Intensity",
                  Value: light.intensity,
                  World: world.uuid,
                  Light: light.uuid,
                },
              },
              {
                data: {
                  Name: "Color",
                  Value: `#${light.color.getHexString()}`,
                  World: world.uuid,
                  Light: light.uuid,
                },
              },
            ],
          };
          if (!sceneRow.children) sceneRow.children = [];
          sceneRow.children.push(lightRow);
        }
        const ambientLights = scene.three.children.filter(
          (child) => child instanceof THREE.AmbientLight,
        ) as THREE.AmbientLight[];
        for (const light of ambientLights) {
          const lightRow: BUI.TableGroupData = {
            data: {
              Name: "Ambient Light",
            },
            children: [
              {
                data: {
                  Name: "Intensity",
                  Value: light.intensity,
                  World: world.uuid,
                  Light: light.uuid,
                },
              },
              {
                data: {
                  Name: "Color",
                  Value: `#${light.color.getHexString()}`,
                  World: world.uuid,
                  Light: light.uuid,
                },
              },
            ],
          };
          if (!sceneRow.children) sceneRow.children = [];
          sceneRow.children.push(lightRow);
        }
        if (sceneRow.children && sceneRow.children?.length > 0) {
          row.children?.push(sceneRow);
        }
      }
      if (camera.three instanceof THREE.PerspectiveCamera) {
        const cameraRow: BUI.TableGroupData = {
          data: {
            Name: "Perspective Camera",
          },
          children: [
            {
              data: {
                Name: "Near Frustum",
                Value: camera.three.near,
                World: world.uuid,
              },
            },
            {
              data: {
                Name: "Far Frustum",
                Value: camera.three.far,
                World: world.uuid,
              },
            },
            {
              data: {
                Name: "Field of View",
                Value: camera.three.fov,
                World: world.uuid,
              },
            },
          ],
        };
        if (camera.hasCameraControls()) {
          const { controls } = camera;
          const keys: Record<string, any> = {
            dollyDragInverted: "Invert Drag",
            dollySpeed: "Dolly Speed",
            truckSpeed: "Truck Speed",
            smoothTime: "Smooth Time",
          };
          for (const key in keys) {
            const value = (controls as Record<string, any>)[key];
            if (value === null || value === undefined) continue;
            cameraRow.children?.push({
              data: {
                Name: keys[key],
                Value: value,
                World: world.uuid,
              },
            });
          }
        }
        row.children?.push(cameraRow);
      }
      if (renderer instanceof OBF.PostproductionRenderer) {
        const { postproduction } = renderer;
        const ao = postproduction.n8ao.configuration;
        const rendererRow: BUI.TableGroupData = {
          data: {
            Name: "Renderer",
          },
          children: [
            {
              data: {
                Name: "Ambient Oclussion",
              },
              children: [
                {
                  data: {
                    Name: "Enabled",
                    Value: postproduction.settings.ao ?? false,
                    World: world.uuid,
                    IsAOConfig: true,
                  },
                },
                {
                  data: {
                    Name: "Color",
                    Value: `#${ao.color.getHexString()}`,
                    World: world.uuid,
                    IsAOConfig: true,
                  },
                },
              ],
            },
            {
              data: {
                Name: "Edges",
              },
            },
            {
              data: {
                Name: "Gloss",
              },
            },
          ],
        };
        row.children?.push(rendererRow);
      }
      rows.push(row);
    }
    table.hiddenColumns = ["World", "Light", "IsAOConfig"];
    table.data = rows;
  };
  return BUI.html`<bim-table ${BUI.ref(onTableCreated)} headers-hidden expanded></bim-table>`;
};
