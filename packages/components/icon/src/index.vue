<script setup>
import { useNamespace } from "@ui-library/hooks";

defineOptions({
  name: "AIcon",
});

defineProps({
  color: String,
  size: [String, Number],
});

const ns = useNamespace("icon");
</script>

<template>
  <i :class="[ns.b()]" :style="[{ color, fontSize: size + 'px' }]">
    <slot></slot>
  </i>
</template>

<style></style>
