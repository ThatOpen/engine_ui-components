import * as BUI from "@thatopen/ui";
import * as THREE from "three";
import * as OBC from "@thatopen/components";
import * as OBF from "@thatopen/components-front";

// TODO: Refactor a LOT

/**
 * Heloooooooooo
 */
export interface WorldsConfigurationUIState {
  components: OBC.Components;
}

const getWorldGrid = (components: OBC.Components, world: OBC.World) => {
  const grids = components.get(OBC.Grids);
  const grid = [...grids.list.values()].find((grid) => grid.world === world);
  return grid;
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

const createOutlineColorInput = (
  renderer: OBF.PostproductionRenderer,
  defaultValue: string,
) => {
  const { color, opacity } = JSON.parse(defaultValue);
  const { postproduction } = renderer;
  const { customEffects } = postproduction;
  const onInputChange = (e: Event) => {
    const { color, opacity } = e.target as BUI.ColorInput;
    customEffects.lineColor = new THREE.Color(color).getHex();
    if (opacity) customEffects.opacity = opacity / 100;
  };
  return BUI.html`
    <bim-color-input @input=${onInputChange} color=${color} opacity=${opacity * 100}></bim-color-input>
  `;
};

const createGridColorInput = (grid: any, defaultValue: string) => {
  const onInputChange = (e: Event) => {
    const input = e.target as BUI.ColorInput;
    const color = new THREE.Color(input.color);
    grid.material.uniforms.uColor.value = color;
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

const createGammaEnabledInput = (
  renderer: OBF.PostproductionRenderer,
  defaultValue: boolean,
) => {
  const { postproduction } = renderer;
  const onInputChange = (e: Event) => {
    const input = e.target as BUI.Checkbox;
    postproduction.setPasses({ gamma: input.checked });
  };
  return BUI.html`
    <bim-checkbox @change=${onInputChange} .checked=${defaultValue}></bim-checkbox>
  `;
};

const createCEEnabledInput = (
  renderer: OBF.PostproductionRenderer,
  defaultValue: boolean,
) => {
  const { postproduction } = renderer;
  const onInputChange = (e: Event) => {
    const input = e.target as BUI.Checkbox;
    postproduction.setPasses({ custom: input.checked });
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
  prefix: string | null;
  suffix: string | null;
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
    prefix: null,
    suffix: null,
    onInputSet: () => {},
    ..._config,
  };
  const { slider, min, max, step, suffix, prefix, onInputSet } = config;
  const onInputChange = (e: Event) => {
    const input = e.target as BUI.NumberInput;
    const value = input.value;
    obj[key] = value;
    onInputSet(value);
  };
  return BUI.html`
    <bim-number-input
      .pref=${prefix}
      .suffix=${suffix}
      .slider=${slider} 
      min=${min} 
      value="${defaultValue}" 
      max=${max} 
      step=${step} 
      @change="${onInputChange}"
    ></bim-number-input> 
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

  const onCellCreated = ({
    detail,
  }: CustomEvent<BUI.CellCreatedEventDetail>) => {
    const parent = detail.cell.parentNode;
    if (!parent) return;
    const nameCell = parent.querySelector<BUI.TableCell<{}>>(
      "bim-table-cell[column='Name']",
    );
    const valueCell = parent.querySelector<BUI.TableCell<{}>>(
      "bim-table-cell[column='Value']",
    );
    if (nameCell && !valueCell) {
      nameCell.style.gridColumn = "1 / -1";
    }
  };

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
          configName === "Grid" &&
          data.IsGridConfig &&
          typeof value === "boolean"
        ) {
          const worldGrid = getWorldGrid(components, world);
          if (!worldGrid) return value;
          return createCheckboxInput(worldGrid, "visible", value);
        }
        if (
          configName === "Color" &&
          data.IsGridConfig &&
          typeof value === "string"
        ) {
          const worldGrid = getWorldGrid(components, world);
          if (!worldGrid) return value;
          return createGridColorInput(worldGrid, value);
        }
        if (
          configName === "Distance" &&
          data.IsGridConfig &&
          typeof value === "number"
        ) {
          const worldGrid = getWorldGrid(components, world);
          if (!worldGrid) return value;
          return createNumberInput(
            worldGrid.material.uniforms.uDistance,
            "value",
            value,
            { slider: true, min: 300, max: 1000 },
          );
        }
        if (
          configName === "Size" &&
          data.IsGridConfig &&
          typeof value === "string"
        ) {
          const worldGrid = getWorldGrid(components, world);
          if (!worldGrid) return value;
          const { x, y } = JSON.parse(value);
          const xInput = createNumberInput(
            worldGrid.material.uniforms.uSize1,
            "value",
            x,
            { slider: true, suffix: "m", prefix: "A", min: 1, max: 20 },
          );
          const yInput = createNumberInput(
            worldGrid.material.uniforms.uSize2,
            "value",
            y,
            { slider: true, suffix: "m", prefix: "B", min: 1, max: 20 },
          );
          return BUI.html`
            <div style="display: flex; gap: 0.25rem; width: 100%; flex-wrap: wrap">${xInput}${yInput}</div>
          `;
        }
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
              { slider: true, max: 16, step: 0.1 },
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
        if (configName === "Ambient Oclussion" && typeof value === "boolean") {
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
            { slider: true, min: 0, max: 16, step: 0.1 },
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
            { slider: true, min: 0, max: 4, step: 0.1 },
          );
        }
        if (
          configName === "Directional Light" &&
          data.Light &&
          typeof data.Light === "string" &&
          typeof value === "boolean"
        ) {
          const light = scene.three.children.find(
            (child) => child.uuid === data.Light,
          );
          if (!(light && light instanceof THREE.Light)) return value;
          return createCheckboxInput(light, "visible", value);
        }
        if (
          configName === "Ambient Light" &&
          data.Light &&
          typeof data.Light === "string" &&
          typeof value === "boolean"
        ) {
          const light = scene.three.children.find(
            (child) => child.uuid === data.Light,
          );
          if (!(light && light instanceof THREE.Light)) return value;
          return createCheckboxInput(light, "visible", value);
        }
        if (
          configName === "Position" &&
          data.Light &&
          typeof data.Light === "string" &&
          typeof value === "string"
        ) {
          const light = scene.three.children.find(
            (child) => child.uuid === data.Light,
          );
          if (!(light && light instanceof THREE.Light)) return value;
          const { x, y, z } = JSON.parse(value);
          const xInput = createNumberInput(light.position, "x", x, {
            slider: true,
            prefix: "X",
            suffix: "m",
            min: -50,
            max: 50,
          });
          const yInput = createNumberInput(light.position, "y", y, {
            slider: true,
            prefix: "Y",
            suffix: "m",
            min: -50,
            max: 50,
          });
          const zInput = createNumberInput(light.position, "z", z, {
            slider: true,
            prefix: "Z",
            suffix: "m",
            min: -50,
            max: 50,
          });
          return BUI.html`
            <div style="display: flex; gap: 0.25rem; width: 100%; flex-wrap: wrap">${xInput}${yInput}${zInput}</div>
          `;
        }
        if (
          configName === "Custom Effects" &&
          data.IsCEConfig &&
          renderer instanceof OBF.PostproductionRenderer &&
          typeof value === "boolean"
        ) {
          return createCEEnabledInput(renderer, value);
        }
        if (
          configName === "Color" &&
          data.IsOutlineConfig &&
          renderer instanceof OBF.PostproductionRenderer &&
          typeof value === "string"
        ) {
          return createOutlineColorInput(renderer, value);
        }
        if (
          configName === "Tolerance" &&
          data.IsOutlineConfig &&
          renderer instanceof OBF.PostproductionRenderer &&
          typeof value === "number"
        ) {
          return createNumberInput(
            renderer.postproduction.customEffects,
            "tolerance",
            value,
            { slider: true, min: 0, max: 6, step: 0.01 },
          );
        }
        if (
          configName === "Outline" &&
          data.IsOutlineConfig &&
          renderer instanceof OBF.PostproductionRenderer &&
          typeof value === "boolean"
        ) {
          return createCheckboxInput(
            renderer.postproduction.customEffects,
            "outlineEnabled",
            value,
          );
        }
        if (
          configName === "Gloss" &&
          data.IsGlossConfig &&
          renderer instanceof OBF.PostproductionRenderer &&
          typeof value === "boolean"
        ) {
          return createCheckboxInput(
            renderer.postproduction.customEffects,
            "glossEnabled",
            value,
          );
        }
        if (
          configName === "Min" &&
          data.IsGlossConfig &&
          renderer instanceof OBF.PostproductionRenderer &&
          typeof value === "number"
        ) {
          return createNumberInput(
            renderer.postproduction.customEffects,
            "minGloss",
            value,
            { slider: true, min: -0.5, max: 0.5, step: 0.01 },
          );
        }
        if (
          configName === "Max" &&
          data.IsGlossConfig &&
          renderer instanceof OBF.PostproductionRenderer &&
          typeof value === "number"
        ) {
          return createNumberInput(
            renderer.postproduction.customEffects,
            "maxGloss",
            value,
            { slider: true, min: -0.5, max: 0.5, step: 0.01 },
          );
        }
        if (
          configName === "Exponent" &&
          data.IsGlossConfig &&
          renderer instanceof OBF.PostproductionRenderer &&
          typeof value === "number"
        ) {
          return createNumberInput(
            renderer.postproduction.customEffects,
            "glossExponent",
            value,
            { slider: true, min: 0, max: 5, step: 0.01 },
          );
        }
        if (
          configName === "Gamma Correction" &&
          data.IsGammaConfig &&
          renderer instanceof OBF.PostproductionRenderer &&
          typeof value === "boolean"
        ) {
          return createGammaEnabledInput(renderer, value);
        }
        return value;
      },
    };

    const rows: BUI.TableGroupData[] = [];

    for (const [, world] of worlds.list) {
      const { scene, camera, renderer } = world;
      const worldGrid = getWorldGrid(components, world);
      const row: BUI.TableGroupData = {
        data: {
          Name:
            world instanceof OBC.SimpleWorld
              ? world.name || world.uuid
              : world.uuid,
        },
        children: [],
      };
      if (scene) {
        const sceneRow: BUI.TableGroupData = {
          data: {
            Name: "Scene",
          },
        };
        if (worldGrid) {
          const color = worldGrid.material.uniforms.uColor.value;
          const colorValue = `#${color.getHexString()}`;
          const sizeValue = JSON.stringify({
            x: worldGrid.material.uniforms.uSize1.value,
            y: worldGrid.material.uniforms.uSize2.value,
          });
          const gridRow: BUI.TableGroupData = {
            data: {
              Name: "Grid",
              Value: worldGrid.three.visible,
              World: world.uuid,
              IsGridConfig: true,
            },
            children: [
              {
                data: {
                  Name: "Color",
                  Value: colorValue,
                  World: world.uuid,
                  IsGridConfig: true,
                },
              },
              {
                data: {
                  Name: "Size",
                  Value: sizeValue,
                  World: world.uuid,
                  IsGridConfig: true,
                },
              },
              {
                data: {
                  Name: "Distance",
                  Value: worldGrid.material.uniforms.uDistance.value,
                  World: world.uuid,
                  IsGridConfig: true,
                },
              },
            ],
          };
          if (!sceneRow.children) sceneRow.children = [];
          sceneRow.children.push(gridRow);
        }
        const directionalLights = scene.three.children.filter(
          (child) => child instanceof THREE.DirectionalLight,
        ) as THREE.DirectionalLight[];
        for (const light of directionalLights) {
          const lightRow: BUI.TableGroupData = {
            data: {
              Name: "Directional Light",
              Value: light.visible,
              World: world.uuid,
              Light: light.uuid,
            },
            children: [
              {
                data: {
                  Name: "Position",
                  Value: JSON.stringify(light.position),
                  World: world.uuid,
                  Light: light.uuid,
                },
              },
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
              Value: light.visible,
              World: world.uuid,
              Light: light.uuid,
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
                Name: "Gamma Correction",
                Value: postproduction.settings.gamma ?? false,
                World: world.uuid,
                IsGammaConfig: true,
              },
            },
            {
              data: {
                Name: "Ambient Oclussion",
                Value: postproduction.settings.ao ?? false,
                World: world.uuid,
                IsAOConfig: true,
              },
              children: [
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
                Name: "Custom Effects",
                Value: postproduction.settings.custom ?? false,
                World: world.uuid,
                IsCEConfig: true,
              },
              children: [
                {
                  data: {
                    Name: "Gloss",
                    Value: postproduction.customEffects.glossEnabled,
                    World: world.uuid,
                    IsGlossConfig: true,
                  },
                  children: [
                    {
                      data: {
                        Name: "Min",
                        Value: postproduction.customEffects.minGloss,
                        World: world.uuid,
                        IsGlossConfig: true,
                      },
                    },
                    {
                      data: {
                        Name: "Max",
                        Value: postproduction.customEffects.maxGloss,
                        World: world.uuid,
                        IsGlossConfig: true,
                      },
                    },
                    {
                      data: {
                        Name: "Exponent",
                        Value: postproduction.customEffects.glossExponent,
                        World: world.uuid,
                        IsGlossConfig: true,
                      },
                    },
                  ],
                },
                {
                  data: {
                    Name: "Outline",
                    Value: postproduction.customEffects.outlineEnabled,
                    World: world.uuid,
                    IsOutlineConfig: true,
                  },
                  children: [
                    {
                      data: {
                        Name: "Color",
                        get Value() {
                          const color = new THREE.Color(
                            postproduction.customEffects.lineColor,
                          );
                          const opacity = postproduction.customEffects.opacity;
                          return JSON.stringify({
                            color: `#${color.getHexString()}`,
                            opacity,
                          });
                        },
                        World: world.uuid,
                        IsOutlineConfig: true,
                      },
                    },
                    {
                      data: {
                        Name: "Tolerance",
                        Value: postproduction.customEffects.tolerance,
                        World: world.uuid,
                        IsOutlineConfig: true,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        };
        row.children?.push(rendererRow);
      }
      rows.push(row);
    }

    table.columns = [{ name: "Name", width: "11rem" }];
    table.hiddenColumns = [
      "World",
      "Light",
      "IsAOConfig",
      "IsCEConfig",
      "IsGlossConfig",
      "IsOutlineConfig",
      "IsGammaConfig",
      "IsGridConfig",
    ];
    table.data = rows;
  };
  return BUI.html`
    <bim-table @cellcreated=${onCellCreated} ${BUI.ref(onTableCreated)} headers-hidden expanded>
     <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
        No worlds to configure
      </bim-label>
    </bim-table>
  `;
};
