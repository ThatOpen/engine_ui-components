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

const createCheckboxInput = (
  obj: Record<string, any>,
  key: string,
  defaultValue: boolean,
  onInputSet: (value: boolean) => void = () => {},
) => {
  const onInputChange = (e: Event) => {
    const input = e.target as BUI.Checkbox;
    const value = input.checked;
    obj[key] = value;
    onInputSet(value);
  };
  return BUI.html`
    <bim-checkbox .checked="${defaultValue}" @change="${onInputChange}"></bim-checkbox> 
  `;
};

interface NumberInputConfig {
  slider: boolean;
  min: number;
  max: number;
  step: number;
  onInputSet: (value: number) => void;
}

const createNumberInput = (
  obj: Record<string, any>,
  key: string,
  defaultValue: number,
  _config?: Partial<NumberInputConfig>,
) => {
  const config: NumberInputConfig = {
    slider: false,
    min: 0,
    max: 100,
    step: 1,
    onInputSet: () => {},
    ..._config,
  };
  const { slider, min, max, step, onInputSet } = config;
  const onInputChange = (e: Event) => {
    const input = e.target as BUI.NumberInput;
    const value = input.value;
    obj[key] = value;
    onInputSet(value);
  };
  return BUI.html`
    <bim-number-input .slider=${slider} min=${min} value="${defaultValue}" max=${max} step=${step} @change="${onInputChange}"></bim-number-input> 
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
        if (
          configName === "Near Frustum" &&
          camera.three instanceof THREE.PerspectiveCamera &&
          typeof value === "number"
        ) {
          const perspectiveCamera = camera.three;
          return createNumberInput(camera.three, "near", value, {
            slider: true,
            min: 0.1,
            max: 10,
            step: 0.1,
            onInputSet: () => perspectiveCamera.updateProjectionMatrix(),
          });
        }
        if (
          configName === "Far Frustum" &&
          camera.three instanceof THREE.PerspectiveCamera &&
          typeof value === "number"
        ) {
          const perspectiveCamera = camera.three;
          return createNumberInput(camera.three, "far", value, {
            slider: true,
            min: 300,
            max: 2000,
            step: 10,
            onInputSet: () => perspectiveCamera.updateProjectionMatrix(),
          });
        }
        if (
          configName === "Field of View" &&
          camera.three instanceof THREE.PerspectiveCamera &&
          typeof value === "number"
        ) {
          const perspectiveCamera = camera.three;
          return createNumberInput(camera.three, "fov", value, {
            slider: true,
            min: 10,
            max: 120,
            onInputSet: () => perspectiveCamera.updateProjectionMatrix(),
          });
        }
        if (
          configName === "Invert Drag" &&
          camera.hasCameraControls() &&
          typeof value === "boolean"
        ) {
          return createCheckboxInput(
            camera.controls,
            "dollyDragInverted",
            value,
          );
        }
        if (
          configName === "Dolly Speed" &&
          camera.hasCameraControls() &&
          typeof value === "number"
        ) {
          return createNumberInput(camera.controls, "dollySpeed", value, {
            slider: true,
            min: 0.5,
            max: 3,
            step: 0.1,
          });
        }
        if (
          configName === "Truck Speed" &&
          camera.hasCameraControls() &&
          typeof value === "number"
        ) {
          return createNumberInput(camera.controls, "truckSpeed", value, {
            slider: true,
            min: 0.5,
            max: 6,
            step: 0.1,
          });
        }
        if (
          configName === "Smooth Time" &&
          camera.hasCameraControls() &&
          typeof value === "number"
        ) {
          return createNumberInput(camera.controls, "smoothTime", value, {
            slider: true,
            min: 0.01,
            max: 2,
            step: 0.01,
          });
        }
        if (configName === "Intensity" && typeof value === "number") {
          if (data.Light && typeof data.Light === "string") {
            const light = scene.three.children.find(
              (child) => child.uuid === data.Light,
            );
            if (!(light && light instanceof THREE.Light)) return value;
            return createNumberInput(light, "intensity", value, {
              slider: true,
              min: 0,
              max: 10,
              step: 0.1,
            });
          }
          if (
            data.IsAOConfig &&
            renderer instanceof OBF.PostproductionRenderer
          ) {
            return createNumberInput(
              renderer.postproduction.n8ao.configuration,
              "intensity",
              value,
              { slider: true, max: 16, step: 0.5 },
            );
          }
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
        if (
          configName === "Half Resolution" &&
          data.IsAOConfig &&
          renderer instanceof OBF.PostproductionRenderer &&
          typeof value === "boolean"
        ) {
          return createCheckboxInput(
            renderer.postproduction.n8ao.configuration,
            "halfRes",
            value,
          );
        }
        if (
          configName === "Screen Space Radius" &&
          data.IsAOConfig &&
          renderer instanceof OBF.PostproductionRenderer &&
          typeof value === "boolean"
        ) {
          return createCheckboxInput(
            renderer.postproduction.n8ao.configuration,
            "screenSpaceRadius",
            value,
          );
        }
        if (
          configName === "Radius" &&
          data.IsAOConfig &&
          renderer instanceof OBF.PostproductionRenderer &&
          typeof value === "number"
        ) {
          return createNumberInput(
            renderer.postproduction.n8ao.configuration,
            "aoRadius",
            value,
            { slider: true, max: 2, step: 0.1 },
          );
        }
        if (
          configName === "Denoise Samples" &&
          data.IsAOConfig &&
          renderer instanceof OBF.PostproductionRenderer &&
          typeof value === "number"
        ) {
          return createNumberInput(
            renderer.postproduction.n8ao.configuration,
            "denoiseSamples",
            value,
            { slider: true, min: 1, max: 16 },
          );
        }
        if (
          configName === "Samples" &&
          data.IsAOConfig &&
          renderer instanceof OBF.PostproductionRenderer &&
          typeof value === "number"
        ) {
          return createNumberInput(
            renderer.postproduction.n8ao.configuration,
            "aoSamples",
            value,
            { slider: true, min: 1, max: 16 },
          );
        }
        if (
          configName === "Denoise Radius" &&
          data.IsAOConfig &&
          renderer instanceof OBF.PostproductionRenderer &&
          typeof value === "number"
        ) {
          return createNumberInput(
            renderer.postproduction.n8ao.configuration,
            "denoiseRadius",
            value,
            { slider: true, min: 0, max: 16 },
          );
        }
        if (
          configName === "Distance Falloff" &&
          data.IsAOConfig &&
          renderer instanceof OBF.PostproductionRenderer &&
          typeof value === "number"
        ) {
          return createNumberInput(
            renderer.postproduction.n8ao.configuration,
            "distanceFalloff",
            value,
            { slider: true, min: 0, max: 16 },
          );
        }
        if (
          configName === "X" &&
          data.Light &&
          typeof data.Light === "string" &&
          typeof value === "number"
        ) {
          const light = scene.three.children.find(
            (child) => child.uuid === data.Light,
          );
          if (!(light && light instanceof THREE.Light)) return value;
          return createNumberInput(light.position, "x", value, {
            slider: true,
            min: -50,
            max: 50,
          });
        }
        if (
          configName === "Y" &&
          data.Light &&
          typeof data.Light === "string" &&
          typeof value === "number"
        ) {
          const light = scene.three.children.find(
            (child) => child.uuid === data.Light,
          );
          if (!(light && light instanceof THREE.Light)) return value;
          return createNumberInput(light.position, "y", value, {
            slider: true,
            min: -50,
            max: 50,
          });
        }
        if (
          configName === "Z" &&
          data.Light &&
          typeof data.Light === "string" &&
          typeof value === "number"
        ) {
          const light = scene.three.children.find(
            (child) => child.uuid === data.Light,
          );
          if (!(light && light instanceof THREE.Light)) return value;
          return createNumberInput(light.position, "z", value, {
            slider: true,
            min: -50,
            max: 50,
          });
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
      if (nameCell && !valueCell) {
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
              // {
              //   data: {
              //     Name: "Position",
              //   },
              //   children: [
              //     {
              //       data: {
              //         Name: "X",
              //         Value: light.position.x,
              //         World: world.uuid,
              //         Light: light.uuid,
              //       },
              //     },
              //     {
              //       data: {
              //         Name: "Y",
              //         Value: light.position.y,
              //         World: world.uuid,
              //         Light: light.uuid,
              //       },
              //     },
              //     {
              //       data: {
              //         Name: "Z",
              //         Value: light.position.z,
              //         World: world.uuid,
              //         Light: light.uuid,
              //       },
              //     },
              //   ],
              // },
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
                    Name: "Samples",
                    Value: ao.aoSamples,
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
                {
                  data: {
                    Name: "Half Resolution",
                    Value: ao.halfRes,
                    World: world.uuid,
                    IsAOConfig: true,
                  },
                },
                {
                  data: {
                    Name: "Screen Space Radius",
                    Value: ao.screenSpaceRadius,
                    World: world.uuid,
                    IsAOConfig: true,
                  },
                },
                {
                  data: {
                    Name: "Radius",
                    Value: ao.aoRadius,
                    World: world.uuid,
                    IsAOConfig: true,
                  },
                },
                {
                  data: {
                    Name: "Intensity",
                    Value: ao.intensity,
                    World: world.uuid,
                    IsAOConfig: true,
                  },
                },
                {
                  data: {
                    Name: "Distance Falloff",
                    Value: ao.distanceFalloff,
                    World: world.uuid,
                    IsAOConfig: true,
                  },
                },
                {
                  data: {
                    Name: "Denoise Samples",
                    Value: ao.denoiseSamples,
                    World: world.uuid,
                    IsAOConfig: true,
                  },
                },
                {
                  data: {
                    Name: "Denoise Radius",
                    Value: ao.denoiseRadius,
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
