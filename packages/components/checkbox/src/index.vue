<template>
  <component
    :is="tag"
    :class="[ns.b(), ns.is('checked', isChecked), ns.is('disabled', isDisabled), ns.m(type), ns.m('size', cbSize)]"
  >
    <!-- 复选框容器 -->
    <span :class="[ns.b('wrapper')]">
      <!-- 真实的复选框 -->
      <input type="checkbox" :class="[ns.e('input')]" :disabled="isDisabled" v-model="model" :checked="isChecked" />
      <!-- 模拟出来的复选框 -->
      <span :class="[ns.e('inner')]">
        <a-icon :icon="Check" :class="[ns.e('icon-check')]"></a-icon>
      </span>
    </span>
    <!-- label 描述文本 -->
    <span :class="[ns.e('label')]">
      <slot>{{ label }}</slot>
    </span>
  </component>
</template>

<script setup>
import { useNamespace } from "@ui-library/hooks";
import { Check } from "@ui-library/icons";
import { AIcon } from "@ui-library/components/icon";
import { useCheckbox } from "../composables";

defineOptions({
  name: "ACheckbox",
});

const { checked, trueValue, falseValue } = defineProps({
  tag: {
    type: String,
    default: "label",
  },
  label: String,
  checked: Boolean,
  disabled: Boolean,
  type: String,
  size: {
    type: String,
    default: "default",
  },
  trueValue: {
    type: [String, Number],
    default: undefined,
  },
  falseValue: {
    type: [String, Number],
    default: undefined,
  },
});

const ns = useNamespace("checkbox");

const cbModel = defineModel({
  type: [String, Number, Boolean],
  default: false,
});

if (checked) {
  // cbModel.value = true;
  if (trueValue) {
    cbModel.value = trueValue;
  } else {
    cbModel.value = true;
  }
} else {
  if (falseValue) {
    cbModel.value = falseValue;
  }
}

const { cbSize, isDisabled, isChecked, model } = useCheckbox({ cbModel });
</script>

<style scoped></style>
