<template>
  <component :is="tag" :class="[ns.b(), spanClass]">
    <slot></slot>
  </component>
</template>

<script setup>
import { useNamespace } from "@ui-library/hooks";
import { computed } from "vue";

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
</script>

<style scoped></style>
