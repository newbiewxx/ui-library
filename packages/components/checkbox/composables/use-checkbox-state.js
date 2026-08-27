import { computed, getCurrentInstance } from "vue";

export const useCheckboxState = ({ groupProps, isGroupMode }) => {
  const instance = getCurrentInstance();

  const cbSize = computed(() => {
    if (instance.props.size === "default") {
      if (isGroupMode.value) {
        return groupProps.size.value;
      } else {
        return "default";
      }
    } else {
      return instance.props.size;
    }
  });

  const isDisabled = computed(() => instance.props.disabled);

  const isChecked = computed(() => instance.props.checked);

  return {
    cbSize,
    isDisabled,
    isChecked,
  };
};
