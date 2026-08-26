<template>
  <component :is="tag" :class="[ns.b(), spanClass]" :style="styledGutter">
    <slot></slot>
  </component>
</template>

<script setup>
import { useNamespace } from "@ui-library/hooks";
import { computed, inject } from "vue";

defineOptions({
  name: "ACol",
});

const { span } = defineProps({
  tag: {
    type: String,
    default: "div",
  },

  span: {
    type: Number,
    default: 0,
  },
});

const ns = useNamespace("col");

const spanClass = computed(() => {
  return span ? `${ns.namespace}-col-${span}` : "";
});

const gutter = inject("gutter");

const styledGutter = computed(() => {
  if (!gutter) return {};

  const gutterVal = gutter / 2 + "px";

  return {
    paddingLeft: gutterVal,
    paddingRight: gutterVal,
  };
});
</script>

<style scoped></style>
