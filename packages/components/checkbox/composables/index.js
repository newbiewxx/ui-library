import { useCheckboxState } from "./use-checkbox-state";

export const useCheckbox = () => {
  const { cbSize, isChecked, isDisabled } = useCheckboxState();

  return {
    cbSize,
    isChecked,
    isDisabled,
  };
};
