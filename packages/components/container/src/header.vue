<template>
  <header :class="[ns.b()]">
    <slot>Header</slot>
  </header>
</template>

<script setup>
import { useNamespace } from "@ui-library/hooks";

defineOptions({
  name: "AHeader",
});

const ns = useNamespace("header");
</script>

<style scoped></style>
