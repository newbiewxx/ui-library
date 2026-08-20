<script setup>
import { useNamespace } from "@ui-library/hooks";
import { ref, inject } from "vue";
import { isFunction, isPromise } from "@ui-library/utils";

defineOptions({
  name: "AButton",
});

const ns = useNamespace("button");

const { beforeChange = () => {} } = defineProps({
  type: {
    type: String,
    default: "default",
  },

  round: {
    type: Boolean,
    default: false,
  },

  disabled: Boolean,
  text: Boolean,
  link: Boolean,
  border: Boolean,
  dashed: Boolean,
  block: Boolean,
  size: {
    type: String,
    default: "default",
  },
  circle: Boolean,
  // 普通按钮的前置图标，圆形按钮的图标
  icon: String,
  // 普通按钮的后置图标
  suffixIcon: String,
  loading: Boolean,
  beforeChange: Function,
});

const _loading = ref(false);

const handleClick = () => {
  const isFn = isFunction(beforeChange);
  if (!isFn) return;

  const fnResult = beforeChange();
  if (!isPromise(fnResult)) return;

  _loading.value = true;
  fnResult.finally(() => {
    _loading.value = false;
  });
};

const _isGroup = inject("isGroup", () => false);

// console.log("组件的命名空间: => ", ns.namespace);
// console.log("组件的块类名: => ", ns.b("wrapper"));
// console.log(ns.e("item"));
// console.log(ns.m("rounded"));
// console.log(ns.m("size", "small"));
// console.log(ns.is("active", true));
</script>

<template>
  <button
    :class="[
      ns.b(),
      ns.m(type),
      ns.is('round', round),
      ns.is('disabled', disabled),
      ns.is('text', text),
      ns.is('link', link),
      ns.is('border', border),
      ns.is('dashed', dashed),
      ns.is('block', block),
      ns.m('size', size),
      ns.is('circle', circle),
      ns.is('loading', loading || _loading),
      ns.is('button-group', _isGroup)
    ]"
    :disabled="disabled || loading || _loading"
    @click="handleClick"
  >

    <!-- $slots 获取模板的所有插槽 -->
    <span v-if="$slots.default" :class="ns.e('inner')">
      <span v-if="loading || _loading" class="iconfont icon-loading" :class='ns.is("loading-animation", loading || _loading)'"></span>
      <!-- 前置 icon 图标 -->
      <span v-if="icon && !loading && !_loading" class="iconfont" :class="icon"></span>
      <slot></slot>
      <!-- 后置 icon 图标 -->
      <span v-if="suffixIcon" class="iconfont" :class="suffixIcon"></span>
    </span>

    <!-- 圆形按钮的 icon 图标 -->
    <!-- 圆形按钮的图标，必须保证 circle 属性为 true 且 传入了 icon 属性值 -->
    <span v-if="circle && icon" class="iconfont" :class="icon"></span>
  </button>
</template>

<style></style>
