import { computed } from "vue";

export const useCheckboxModel = ({ cbModel }) => {
  const model = computed({
    get() {
      return cbModel.value;
    },

    set(val) {
      cbModel.value = val;
    },
  });

  return {
    model,
  };
};
