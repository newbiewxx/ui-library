const defaultNamespace = "a";

// el-button
// suffix => el-button-wrapper
const _bem = (namespace, block, blockSuffix, element, modifier, modifierValue) => {
  let className = `${namespace}-${block}`;

  blockSuffix && (className += `-${blockSuffix}`);
  element && (className += `__${element}`);
  modifier && (className += `--${modifier}`);
  modifierValue && (className += `--${modifierValue}`);
  return className;
};

export const useNamespace = block => {
  const namespace = defaultNamespace;

  const b = (blockSuffix = "") => _bem(namespace, block, blockSuffix);
  const e = (element = "") => (element ? _bem(namespace, block, "", element) : "");
  const m = (modifier = "") => _bem(namespace, block, "", "", modifier);

  const be = (blockSuffix = "", element = "") =>
    blockSuffix && element ? _bem(namespace, block, blockSuffix, element) : "";

  const em = (blockSuffix = "", modifier = "") =>
    blockSuffix && modifier ? _bem(namespace, block, blockSuffix, "", modifier) : "";

  const is = (activeName, state) => (activeName && state ? `is-${activeName}`: '');

  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    is
  };
};
