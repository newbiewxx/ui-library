import { CHECKBOX_GROUP_PROPS } from "../src/constant";
import { inject, computed } from "vue";

export const useCheckboxGroup = () => {
  const groupProps = inject(CHECKBOX_GROUP_PROPS, undefined);

  const isGroupMode = computed(() => groupProps !== undefined);

  return {
    groupProps,
    isGroupMode,
  };
};
