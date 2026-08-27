import { computed, getCurrentInstance } from "vue";

export const useCheckboxState = () => {
  const instance = getCurrentInstance();

  const cbSize = computed(() => instance.props.size);

  return {
    cbSize,
  };
};
