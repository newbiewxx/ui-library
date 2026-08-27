import { useCheckboxGroup } from "./use-checkbox-group";
import { useCheckboxModel } from "./use-checkbox-model";
import { useCheckboxState } from "./use-checkbox-state";

export const useCheckbox = ({ cbModel }) => {
  const { groupProps, isGroupMode } = useCheckboxGroup();
  const { model } = useCheckboxModel({ cbModel });
  const { cbSize, isChecked, isDisabled } = useCheckboxState({ groupProps, isGroupMode, model });

  return {
    cbSize,
    isChecked,
    isDisabled,
    // groupProps,
    // isGroupMode,
    model,
  };
};
