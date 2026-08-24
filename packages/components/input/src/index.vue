<script setup>
import { useNamespace } from "@ui-library/hooks";
import { ref, computed } from "vue";
import { AIcon } from "@ui-library/components";

defineOptions({
  name: "AInput",
});

const { prefixIcon, suffixIcon } = defineProps({
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
});

const ns = useNamespace("input");

const _isFocus = ref(false);
const handleFocus = () => {
  _isFocus.value = true;
};
const handleBlur = () => {
  _isFocus.value = false;
};

const _isPrefix = computed(() => prefixIcon);
const _isSuffix = computed(() => suffixIcon);
</script>

<template>
  <div
    :class="[ns.b(), ns.is('focus', _isFocus), ns.is('disabled', disabled), ns.m('size', size), ns.is('round', round)]"
  >
    <!-- 前置区域 -->
    <div :class="[ns.e('wrapper')]">
      <!-- 前缀区域 -->
      <div v-if="_isPrefix" :class="[ns.e('fix-wrapper'), ns.e('prefix')]">
        <a-icon :icon="prefixIcon"></a-icon>
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
        <a-icon :icon="suffixIcon"></a-icon>
      </div>
    </div>
    <!-- 后置区域 -->
  </div>
</template>
