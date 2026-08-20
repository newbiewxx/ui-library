<script setup>
import { useNamespace } from "@ui-library/hooks";
defineOptions({
  name: "AButton",
});

const ns = useNamespace("button");

defineProps({
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
});

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
    ]"
    :disabled="disabled"
  >
    <!-- $slots 获取模板的所有插槽 -->
    <span v-if="$slots.default" :class="ns.e('inner')">
      <!-- 前置 icon 图标 -->
      <span v-if="icon" class="iconfont" :class="icon"></span>
      <slot></slot>
      <!-- 前置 icon 图标 -->
      <span v-if="icon" class="iconfont" :class="icon"></span>
    </span>

    <!-- 圆形按钮的 icon 图标 -->
    <!-- 圆形按钮的图标，必须保证 circle 属性为 true 且 传入了 icon 属性值 -->
    <span v-if="circle && icon && !$slots.default" class="iconfont" :class="icon"></span>
  </button>
</template>

<style></style>
