<script setup>
import { useNamespace } from "@ui-library/hooks";

defineOptions({
  name: "AIcon",
});

const ns = useNamespace("icon");
</script>

<template>
  <i :class="[ns.b()]">
    <slot></slot>
  </i>
</template>

<style></style>
