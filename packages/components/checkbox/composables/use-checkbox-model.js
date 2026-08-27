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
      let targetValue = val;
      if (val && props.trueValue) {
        targetValue = props.trueValue;
      } else if (!val && props.falseValue) {
        targetValue = props.falseValue;
      }

      cbModel.value = targetValue;
      instance.emit("change", targetValue);
    },
  });

  return {
    model,
  };
};
