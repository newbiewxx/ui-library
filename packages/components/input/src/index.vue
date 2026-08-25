<script setup>
import { useNamespace } from "@ui-library/hooks";
import { ref, computed, useSlots, provide } from "vue";
import { AIcon } from "@ui-library/components";

defineOptions({
  name: "AInput",
});

const { prefixIcon, suffixIcon, prefix, suffix, prepend, append, size } = defineProps({
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
});

const ns = useNamespace("input");

const _isFocus = ref(false);
const handleFocus = () => {
  _isFocus.value = true;
};
const handleBlur = () => {
  _isFocus.value = false;
};

const _isPrefix = computed(() => prefixIcon || prefix);
const _isSuffix = computed(() => suffixIcon || suffix);

// const slots = useSlots(); // 使用 useSlots 获取插槽, 本次我不需要使用，可以直接在模板内使用 $slots 获取插槽对象
const slots = useSlots();

const _isPrepend = computed(() => slots.prepend || prepend);
const _isAppend = computed(() => slots.append || append);

// 注入 size
// 内部的 button 组件会通过 provide 获取到 groupSize 值，并使用
provide("groupSize", size);
</script>

<template>
  <div
    :class="[ns.b(), ns.is('focus', _isFocus), ns.is('disabled', disabled), ns.m('size', size), ns.is('round', round)]"
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
        type="text"
        :placeholder
        :class="[ns.e('inner')]"
        @focus="handleFocus"
        @blur="handleBlur"
        :maxlength="maxLength"
        :disabled
      />
      <!-- 后缀区域 -->
      <div v-if="_isSuffix" :class="[ns.e('fix-wrapper'), ns.e('suffix')]">
        <a-icon v-if="suffixIcon" :icon="suffixIcon"></a-icon>
        <span v-if="suffix">{{ suffix }}</span>
      </div>
    </div>
    <!-- 后置区域 -->
    <div v-if="_isAppend" :class="[ns.e('aside-wrapper'), ns.e('append')]">
      <slot v-if="slots.append" name="append"></slot>
      <span :class="[ns.e('append-text')]" v-if="append">{{ append }}</span>
    </div>
  </div>
</template>
