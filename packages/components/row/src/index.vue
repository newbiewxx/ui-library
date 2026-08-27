<template>
  <component :is="tag" :class="[ns.b(), ns.is(`justify-${justify}`, !!justify)]" :style="[styledMargin, styledGowGap]">
    <slot></slot>
  </component>
</template>

<script setup>
import { useNamespace } from "@ui-library/hooks";
import { computed, provide } from "vue";

defineOptions({
  name: "ARow",
});

const { gutter, gap } = defineProps({
  tag: {
    type: String,
    default: "div",
  },

  gutter: {
    type: Number,
    default: 0,
  },

  gap: {
    type: Number,
    default: 0,
  },

  justify: {
    type: String,
    default: "",
  },
});

const ns = useNamespace("row");

provide("gutter", gutter);

const styledMargin = computed(() => {
  if (!gutter) return {};

  const halfGutter = (gutter / 2) * -1 + "px";

  return {
    marginLeft: halfGutter,
    marginRight: halfGutter,
  };
});

const styledGowGap = computed(() => {
  if (!gap) return {};

  return {
    rowGap: gap + "px",
  };
});
</script>

<style scoped></style>
