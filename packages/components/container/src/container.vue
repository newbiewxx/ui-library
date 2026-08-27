<template>
  <div :class="[ns.b()]">
    <slot></slot>
  </div>
</template>

<script setup>
import { useNamespace } from "@ui-library/hooks";

defineOptions({
  name: "AContainer",
});

const ns = useNamespace("container");
</script>

<style scoped></style>
