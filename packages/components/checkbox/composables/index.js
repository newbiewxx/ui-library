import { useCheckboxGroup } from "./use-checkbox-group";
import { useCheckboxState } from "./use-checkbox-state";

export const useCheckbox = () => {
  const { groupProps, isGroupMode } = useCheckboxGroup();
  const { cbSize, isChecked, isDisabled } = useCheckboxState({ groupProps, isGroupMode });

  return {
    cbSize,
    isChecked,
    isDisabled,
    groupProps,
    isGroupMode,
  };
};
