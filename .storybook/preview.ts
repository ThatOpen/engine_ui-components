import type { Preview } from "@storybook/web-components";
import { setCustomElementsManifest } from "@storybook/web-components";
import customElements from '../custom-elements.json';
import DocTemplate from "./DocumentationTemplate.mdx"
import * as Docs from "@storybook/blocks"

setCustomElementsManifest(customElements)

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      page: DocTemplate,
      // toc: true,
    },
  },
};

export default preview;
