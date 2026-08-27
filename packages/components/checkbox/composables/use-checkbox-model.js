import { computed, getCurrentInstance } from "vue";

export const useCheckboxModel = ({ cbModel }) => {
  const instance = getCurrentInstance();
  const props = instance.props;

  const model = computed({
    get() {
      // return cbModel.value;
      // if (typeof cbModel.value === "boolean") {
      //   return cbModel.value;
      // } else {
      //   return cbModel.value === props.trueValue;
      // }
      return cbModel.value;
    },

    set(val) {
      // cbModel.value = val;
      if (val && props.trueValue) {
        cbModel.value = props.trueValue;
      } else if (!val && props.falseValue) {
        cbModel.value = props.falseValue;
      } else {
        cbModel.value = val;
      }
    },
  });

  return {
    model,
  };
};
