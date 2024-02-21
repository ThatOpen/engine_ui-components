import { LitElement } from 'lit';

export class UIComponent extends LitElement {
  protected static _tableHostable: boolean

  getInnerElement<T extends HTMLElement = HTMLElement>(id: string) {
    const element = this.querySelector<T>(`[data-ui-id='${id}']`);
    if (!element) {
      throw new Error(
        `There is no element with attribute data-ui-id='${id}' in this UIComponent.`
      );
    }
    return element;
  }
}