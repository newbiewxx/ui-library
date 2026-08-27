<template>
  <header :class="[ns.b()]" :style="[styledHeight]">
    <slot>Header</slot>
  </header>
</template>

<script setup>
import { useNamespace, useStyle } from "@ui-library/hooks";
import { computed } from "vue";

defineOptions({
  name: "AHeader",
});

const { height } = defineProps({
  height: {
    type: String,
    default: "60px",
  },
});

const ns = useNamespace("header");
const uStyle = useStyle();

const styledHeight = computed(() => uStyle.height(height));
</script>

<style scoped></style>
