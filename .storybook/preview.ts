import type { Preview } from "@storybook/web-components";
import { setCustomElementsManifest } from "@storybook/web-components";
import customElements from '../custom-elements.json';
import DocumentationTemplate from './DocumentationTemplate.mdx';
import { Meta, Title, Primary, Controls, Stories } from '@storybook/blocks';

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
      // page: DocumentationTemplate,
      toc: true,
    },
  },
};

export default preview;
