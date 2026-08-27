import { computed, getCurrentInstance } from "vue";

export const useCheckboxState = ({ groupProps, isGroupMode, model }) => {
  const instance = getCurrentInstance();
  const props = instance.props;

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

  // const isChecked = computed(() => instance.props.checked);
  const isChecked = computed(() => {
    if (typeof model.value === "boolean") {
      return model.value;
    } else {
      return model.value === props.trueValue;
    }
  });

  return {
    cbSize,
    isDisabled,
    isChecked,
  };
};
