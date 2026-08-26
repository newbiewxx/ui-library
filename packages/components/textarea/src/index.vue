<script setup>
import { useNamespace, useStyle, useEvent, useExpose } from "@ui-library/hooks";
import { computed, useTemplateRef } from "vue";

defineOptions({
  name: "ATextarea",
});

const { disabled, count, maxLength, width, rows } = defineProps({
  disabled: Boolean,
  placeholder: {
    type: String,
    default: "请输入内容",
  },
  maxLength: [String, Number],
  count: Boolean,
  width: String,
  rows: [String, Number],
});

const emit = defineEmits([
  "input",
  "clear",
  "blur",
  "focus",
  "mouseenter",
  "mouseleave",
  "keydown",
  "keyup",
  "change",
  "compositionstart",
  "compositionupdate",
  "compositionend",
]);

const ns = useNamespace("input");

const modelValue = defineModel({ default: "" });

const _showCount = computed(() => {
  return maxLength && count && !disabled;
});

const _isColorDanger = computed(() => {
  return modelValue.value.length > Number(maxLength);
});

// 是否渲染后缀区域
const _isSuffix = computed(() => _showCount.value);

const uStyle = useStyle();

const styleWidth = uStyle.width(width);

const { isFocus, inputEvent, isComposition } = useEvent();

const inputHandler = e => {
  // 如果当前正在组合文字，则 return 出去，避免在组合文字的过程中，触发 input 事件的逻辑
  if (isComposition.value) return;
  modelValue.value = e.currentTarget.value;
  // 触发自定义的 input 事件
  // emit("input", e.currentTarget.value, e);
  inputEvent(e);
};

const clearHandler = () => {
  modelValue.value = "";
  emit("input", "");
  emit("clear");
  // 聚焦
  _inputRef.value?.focus();
};

const _inputRef = useTemplateRef("input-ref");

const { focusExpose, selectExpose } = useExpose(_inputRef);

defineExpose({
  focus: focusExpose,
  select: selectExpose,
  clear: clearHandler,
});
</script>

<template>
  <div :class="[ns.b(), ns.is('focus', isFocus), ns.is('disabled', disabled)]" :style="styleWidth">
    <div :class="[ns.e('wrapper'), ns.e('wrapper-multi')]">
      <textarea
        :rows
        :placeholder
        :class="[ns.e('inner'), ns.e('multi')]"
        :disabled
        :value="modelValue"
        :maxlength="maxLength"
        ref="input-ref"
        @input="inputHandler"
      />
      <!-- 后缀区域 -->
      <div v-if="_isSuffix" :class="[ns.e('fix-wrapper'), ns.e('suffix')]">
        <span v-if="_showCount" :class="ns.is('color-error', _isColorDanger)">
          {{ modelValue.length }}/{{ maxLength }}
        </span>
      </div>
    </div>
  </div>
</template>
