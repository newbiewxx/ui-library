<script setup>
import { useNamespace, useStyle } from "@ui-library/hooks";
import { computed } from "vue";

defineOptions({
  name: "AIcon",
});

const { color, size } = defineProps({
  color: String,
  size: [String, Number],
});

const ns = useNamespace("icon");
const uStyle = useStyle();

const styledFontSize = computed(() => uStyle.fontSize(size));
const styledColor = computed(() => uStyle.color(color));
</script>

<template>
  <i :class="[ns.b()]" :style="[styledFontSize, styledColor]">
    <slot></slot>
  </i>
</template>

<style></style>
