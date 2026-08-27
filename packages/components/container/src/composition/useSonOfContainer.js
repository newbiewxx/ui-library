import { getCurrentInstance } from "vue";

export const useSonOfContainer = () => {
  const _current = getCurrentInstance();

  if (_current.parent.type.name !== "AContainer" && import.meta.env.DEV) {
    console.warn(`${_current.type.name} 组件必须是 AContainer 的直接子节点`);
  }
};
