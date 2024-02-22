import { css } from "lit";
import { UIManagerStyles } from "..";

const dark = true

export const styles: UIManagerStyles = {
  color: {
    brand: {
      main: {
        light: "#9D6BFF",
        base: "#6528d7"
      },
      accent: {
        base: "#bcf124",
      }
    },
    background: {
      base: `hsl(210 10% ${dark ? 6 : 94}%)`,
      "contrast-10": `hsl(210 10% ${dark ? 10 : 90}%)`,
      "contrast-20": `hsl(210 10% ${dark ? 20 : 80}%)`,
      "contrast-40": `hsl(210 10% ${dark ? 40 : 60}%)`,
      "contrast-60": `hsl(210 10% ${dark ? 60 : 40}%)`,
      "contrast-80": `hsl(210 10% ${dark ? 80 : 20}%)`,
      "contrast-100": `hsl(210 10% ${dark ? 94 : 6}%)`,
    }
  },
  size: {
    "4xs": "0.375rem",
    "3xs": "0.5rem",
    "2xs": "0.625rem",
    "xs": "0.75rem",
    "sm": "0.875rem",
    "base": "1rem"
  },
}

// Add a wrapped attribute to integrate the label into the input
export const internalStyles = css`
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