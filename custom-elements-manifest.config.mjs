// https://github.com/open-wc/custom-elements-manifest/blob/master/packages/analyzer/docs/plugins.md
const excludePrivateMembers = () => {
  return {
    name: "exclude-private-members",
    moduleLinkPhase({ moduleDoc }) {
      if (!Array.isArray(moduleDoc.declarations)) return;
      for (const declaration of moduleDoc.declarations) {
        if (!Array.isArray(declaration.members)) continue;
        const members = [...declaration.members].filter(
          (member) => member.privacy !== "private",
        );
        declaration.members = members;
      }
    },
  };
};

// https://github.com/open-wc/custom-elements-manifest/tree/master/packages/analyzer
// https://custom-elements-manifest.open-wc.org/analyzer/config/
export default {
  globs: [
    "packages/core/src/components/**/index.ts",
    "packages/obc/src/core/**/index.js",
  ],
  litelement: true,
  plugins: [excludePrivateMembers()],
};
