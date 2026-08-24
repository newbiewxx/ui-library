<script setup>
import { useNamespace } from "@ui-library/hooks";
import { ref } from "vue";

defineOptions({
  name: "AInput",
});

defineProps({
  disabled: Boolean,
  placeholder: {
    type: String,
    default: "请输入内容",
  },
  maxLength: [String, Number],
  size: {
    type: String,
    default: "default",
  },
  round: Boolean,
});

const ns = useNamespace("input");

const _isFocus = ref(false);
const handleFocus = () => {
  _isFocus.value = true;
};
const handleBlur = () => {
  _isFocus.value = false;
};
</script>

<template>
  <div
    :class="[ns.b(), ns.is('focus', _isFocus), ns.is('disabled', disabled), ns.m('size', size), ns.is('round', round)]"
  >
    <!-- 前置区域 -->
    <div :class="[ns.e('wrapper')]">
      <!-- 前缀区域 -->
      <input
        type="text"
        :placeholder
        :class="[ns.e('inner')]"
        @focus="handleFocus"
        @blur="handleBlur"
        :maxlength="maxLength"
        :disabled
      />
      <!-- 后缀区域 -->
    </div>
    <!-- 后置区域 -->
  </div>
</template>
