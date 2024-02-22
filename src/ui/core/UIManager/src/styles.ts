import { css } from "lit";

const internalStyles = css`
  :host {
    flex: 1;
  }

  .parent {
    display: flex;
    flex-wrap: wrap;
    gap: 0.375rem;
    user-select: none;
    flex: 1;
  }

  :host(:not([vertical])) .parent {
    justify-content: space-between;
  }
  
  :host([vertical]) .parent {
    flex-direction: column;
  }
  
  :host(:not([vertical])) .input {
    flex: 1;
    max-width: 20rem;
  }
  
  :host(:not([vertical])[label]) .input {
    max-width: 13rem;
  }

  .input {
    box-sizing: border-box;
    display: flex;
    height: 1.75rem;
    min-width: 6rem;
  }
`

const scrollbar = css`
  ::-webkit-scrollbar {
    width: 0.5rem;
    overflow: hidden;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0.25rem;
    background-color: var(--bim-scrollbar--c);
  }
  
  ::-webkit-scrollbar-track {
    background-color: var(--bim-scrollbar--bgc);
  }
`

export const styles = {
  scrollbar,
  internalStyles
}