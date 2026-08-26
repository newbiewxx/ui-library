<script setup>
import { useNamespace, useStyle, useEvent } from "@ui-library/hooks";
import { ref, computed, useSlots, provide, useTemplateRef } from "vue";
import { AIcon } from "@ui-library/components";
import { EyeOff, Eye, XCircle } from "@ui-library/icons";

defineOptions({
  name: "AInput",
});

const {
  prefixIcon,
  suffixIcon,
  prefix,
  suffix,
  prepend,
  append,
  size,
  password,
  clearable,
  disabled,
  count,
  maxLength,
  width,
} = defineProps({
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
  prefixIcon: [String, Object],
  suffixIcon: [String, Object],
  prefix: String,
  suffix: String,
  // 前置和周知的文本内容
  prepend: String,
  append: String,
  password: Boolean,
  clearable: Boolean,
  count: Boolean,
  width: String,
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

// const _isFocus = ref(false);
// const handleFocus = () => {
//   _isFocus.value = true;
// };
// const handleBlur = () => {
//   _isFocus.value = false;
// };

const _isPrefix = computed(() => prefixIcon || prefix);
const _isSuffix = computed(
  () => suffixIcon || suffix || _showPwdIcon.value || _showClearIcon.value || _showCount.value
);

// const slots = useSlots(); // 使用 useSlots 获取插槽, 本次我不需要使用，可以直接在模板内使用 $slots 获取插槽对象
const slots = useSlots();

const _isPrepend = computed(() => slots.prepend || prepend);
const _isAppend = computed(() => slots.append || append);

// 注入 size
// 内部的 button 组件会通过 provide 获取到 groupSize 值，并使用
provide("groupSize", size);

const _pwdVisible = ref(false);

const _inputType = computed(() => {
  return password ? (_pwdVisible.value ? "text" : "password") : "text";
});

const _pwdIcon = computed(() => {
  return _pwdVisible.value ? Eye : EyeOff;
});

const modelValue = defineModel({ default: "" });

const _showPwdIcon = computed(() => {
  return password && !disabled;
});

const _showClearIcon = computed(() => {
  return clearable && modelValue.value && !disabled && !password;
});

const _showCount = computed(() => {
  return maxLength && count && !disabled;
});

const _isColorDanger = computed(() => {
  return modelValue.value.length > Number(maxLength);
});

const uStyle = useStyle();

const styleWidth = uStyle.width(width);

const {
  isFocus,
  focusEvent,
  blurEvent,
  mouseenterEvent,
  mouseleaveEvent,
  keydownEvent,
  keyupEvent,
  inputEvent,
  changeEvent,
  compositionstartEvent,
  compositionupdateEvent,
  compositionendEvent,
} = useEvent();

const inputHandler = e => {
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
</script>

<template>
  <div
    :class="[ns.b(), ns.is('focus', isFocus), ns.is('disabled', disabled), ns.m('size', size), ns.is('round', round)]"
    :style="styleWidth"
  >
    <!-- 前置区域 -->
    <div v-if="_isPrepend" :class="[ns.e('aside-wrapper'), ns.e('prepend')]">
      <slot name="prepend" v-if="slots.prepend"></slot>
      <span :class="[ns.e('append-text')]" v-if="append">{{ append }}</span>
    </div>
    <div :class="[ns.e('wrapper'), ns.is('prepend', _isPrepend), ns.is('append', _isAppend)]">
      <!-- 前缀区域 -->
      <div v-if="_isPrefix" :class="[ns.e('fix-wrapper'), ns.e('prefix')]">
        <a-icon v-if="prefixIcon" :icon="prefixIcon"></a-icon>
        <span v-if="prefix">{{ prefix }}</span>
      </div>
      <input
        :type="_inputType"
        :placeholder
        :class="[ns.e('inner')]"
        @focus="focusEvent"
        @blur="blurEvent"
        :maxlength="maxLength"
        :disabled
        :value="modelValue"
        @input="inputHandler"
        @mouseenter="mouseenterEvent"
        @mouseleave="mouseleaveEvent"
        @keydown="keydownEvent"
        @keyup="keyupEvent"
        @change="changeEvent"
        @compositionstart="compositionstartEvent"
        @compositionupdate="compositionupdateEvent"
        @compositionend="compositionendEvent"
        ref="input-ref"
      />
      <!-- 后缀区域 -->
      <div v-if="_isSuffix" :class="[ns.e('fix-wrapper'), ns.e('suffix')]">
        <a-icon v-if="suffixIcon" :icon="suffixIcon"></a-icon>
        <span v-if="suffix">{{ suffix }}</span>
        <!-- 密码框 -->
        <a-icon :icon="_pwdIcon" v-if="_showPwdIcon" @click="_pwdVisible = !_pwdVisible"></a-icon>
        <!-- 清空的图标 -->
        <a-icon :icon="XCircle" v-if="_showClearIcon" @click="clearHandler"></a-icon>
        <!-- 统计字数 -->
        <span v-if="_showCount" :class="ns.is('color-error', _isColorDanger)">
          {{ modelValue.length }}/{{ maxLength }}
        </span>
      </div>
    </div>
    <!-- 后置区域 -->
    <div v-if="_isAppend" :class="[ns.e('aside-wrapper'), ns.e('append')]">
      <slot v-if="slots.append" name="append"></slot>
      <span :class="[ns.e('append-text')]" v-if="append">{{ append }}</span>
    </div>
  </div>
</template>
