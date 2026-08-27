import { computed, getCurrentInstance } from "vue";

export const useCheckboxState = () => {
  const instance = getCurrentInstance();

  const cbSize = computed(() => instance.props.size);

  const isDisabled = computed(() => instance.props.disabled);

  const isChecked = computed(() => instance.props.checked);

  return {
    cbSize,
    isDisabled,
    isChecked,
  };
};
