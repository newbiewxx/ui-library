<template>
  <component :is="tag" :class="[ns.b()]">
    <slot></slot>
  </component>
</template>

<script setup>
import { useNamespace } from "@ui-library/hooks";

defineOptions({
  name: "ACol",
});

defineProps({
  tag: {
    type: String,
    default: "div",
  },
});

const ns = useNamespace("col");
</script>

<style scoped></style>
