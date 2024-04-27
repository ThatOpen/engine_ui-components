export const getElementValue = (child: HTMLElement, recursive = true) => {
  let value: Record<string, any> = {};
  for (const _child of child.children) {
    const child = _child as any;
    const key = child.getAttribute("name") || child.getAttribute("label");
    if (key) {
      if ("value" in child) {
        const childValue = child.value;
        const isObject =
          typeof childValue === "object" && !Array.isArray(childValue);
        if (isObject && Object.keys(childValue).length === 0) continue;
        value[key] = child.value;
      } else if (recursive) {
        const childValue = getElementValue(child);
        if (Object.keys(childValue).length === 0) continue;
        value[key] = childValue;
      }
    } else if (recursive) {
      value = { ...value, ...getElementValue(child) };
    }
  }
  return value;
};

export const convertString = (value: string) => {
  if (value === "true" || value === "false") {
    return value === "true";
  }
  // eslint-disable-next-line no-restricted-globals
  if (value && !isNaN(Number(value)) && value.trim() !== "") {
    return Number(value);
  }
  return value;
};
