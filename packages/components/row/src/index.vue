<template>
  <component :is="tag" :class="[ns.b()]">
    <slot></slot>
  </component>
</template>

<script setup>
import { useNamespace } from "@ui-library/hooks";

defineOptions({
  name: "ARow",
});

defineProps({
  tag: {
    type: String,
    default: "div",
  },
});

const ns = useNamespace("row");
</script>

<style scoped></style>
