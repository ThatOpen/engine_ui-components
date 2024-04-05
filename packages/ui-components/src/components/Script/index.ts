/* eslint-disable no-eval */

// eslint-disable-next-line import/no-extraneous-dependencies
import * as TS from "typescript";
import { css, html, LitElement } from "lit";

// -- Monaco Editor Imports --
import * as monaco from "monaco-editor";
// import styles from "monaco-editor/min/vs/editor/editor.main.css";

// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import EditorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";

// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import TsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
import { createRef, ref } from "lit/directives/ref.js";
// import { getDTsFilesContents } from "./src/resolver";

window.MonacoEnvironment = {
  getWorker(_: any, label: string) {
    switch (label) {
      case "typescript":
        return new TsWorker();
      default:
        return new EditorWorker();
    }
  },
};

export class Script extends LitElement {
  static styles = css`
    .parent {
      width: 100%;
      height: 100%;
    }
  `;

  static properties = {
    autoRun: { type: Boolean, attribute: "auto-run", reflect: true },
  };

  declare autoRun: boolean;

  private _container = createRef<HTMLDivElement>();
  editor?: monaco.editor.IStandaloneCodeEditor;
  codeInput: Record<string, any> = {};
  codeReturn: any = undefined;
  config = {
    THREE: {},
    OBC: {},
    FRAGS: {},
    WEBIFC: {},
    CLAY: {},
    components: {},
  };

  set value(value: string) {
    this.editor!.setValue(value);
  }

  get value() {
    const value = this.editor!.getValue();
    return value;
  }

  private tsToJs(tsCode: string) {
    const result = TS.transpileModule(tsCode, {
      compilerOptions: {
        target: TS.ScriptTarget.ESNext,
        module: TS.ModuleKind.CommonJS,
      },
    });
    return result.outputText;
  }

  constructor() {
    super();
    this.autoRun = false;
  }

  run() {
    const code = `
    async function code(inputs) {
      const { THREE, OBC, FRAGS, WEBIFC, CLAY, BUI, viewer, uiManager } = inputs
      ${this.tsToJs(this.value)}
    }
    code(this.codeInput).then((res) => {
      this.codeReturn = res
      this.dispatchEvent(new Event("code-eval"))
    })
    `;
    eval(code);
  }

  firstUpdated() {
    const { value: container } = this._container;
    if (!container) return;
    // const obcTypes = 'https://unpkg.com/openbim-components@1.4.15/src/index.d.ts';
    // getDTsFilesContents(obcTypes).then((result) => {
    //   const namespace = `declare namespace OBC {${result}}`
    //   monaco.languages.typescript.typescriptDefaults.addExtraLib(namespace);
    // })
    monaco.editor.defineTheme("thatopen", {
      base: "vs-dark",
      inherit: true,
      rules: [
        { token: "identifier", foreground: "#c7ccd1" },
        { token: "comment", foreground: "#646464", fontStyle: "italic" },
        { token: "string", foreground: "#b1755d" },
        { token: "keyword", foreground: "#9f71ef" },
        { token: "delimiter", foreground: "#9f71ef" },
        { token: "type", foreground: "#a6d71d" },
        { token: "operators", foreground: "#a6d71d" },
        { token: "delimiter.parenthesis", foreground: "#a6d71d" },
        { token: "delimiter.bracket", foreground: "#a6d71d" },
      ],
      colors: {
        "editor.background": "#0b0d0e",
        "editor.lineHighlightBackground": "#6528d726",
        "editor.inactiveSelectionBackground": "#6528d726",
        "editor.selectionBackground": "#6528d74d",
        "editor.lineHighlightBorder": "#00000000",
      },
    });
    this.editor = monaco.editor.create(container, {
      model: monaco.editor.createModel(
        "",
        "typescript",
        monaco.Uri.parse("file:///index.ts"),
      ),
      theme: "thatopen",
      fontLigatures: true,
      fontSize: 18,
      wordWrap: "on",
      automaticLayout: true,
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      padding: { top: 16, bottom: 16 },
      // @ts-ignore
      "bracketPairColorization.enabled": false,
    });
    this.editor.onDidChangeModelContent(() => this.autoRun && this.run());
    monaco.languages.typescript.typescriptDefaults.addExtraLib(
      `declare namespace OBC { class Components {static release: string} }`,
      "file:///node_modules/@types/obc/index.d.ts",
    );
    //     this.editor.getModel()?.setValue(
    //       `const release = OBC.Components.release
    // console.log(release)`)
  }

  render() {
    return html`
      <style></style>
      <div ${ref(this._container)} class="parent"></div>
    `;
  }
}
