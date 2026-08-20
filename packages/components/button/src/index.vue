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
});

console.log("组件的命名空间: => ", ns.namespace);
console.log("组件的块类名: => ", ns.b("wrapper"));
console.log(ns.e("item"));
console.log(ns.m("rounded"));
console.log(ns.m("size", "small"));
console.log(ns.is("active", true));
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
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<style></style>
