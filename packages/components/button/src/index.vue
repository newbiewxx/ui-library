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
});

console.log("组件的命名空间: => ", ns.namespace);
console.log("组件的块类名: => ", ns.b("wrapper"));
console.log(ns.e("item"));
console.log(ns.m("rounded"));
console.log(ns.m("size", "small"));
console.log(ns.is("active", true));
</script>

<template>
  <button :class="[ns.b(), ns.m(type)]">
    <!-- $slots 获取模板的所有插槽 -->
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<style></style>
