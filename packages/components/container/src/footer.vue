<template>
  <footer :class="[ns.b()]">
    <slot>Footer</slot>
  </footer>
</template>

<script setup>
import { useNamespace } from "@ui-library/hooks";

defineOptions({
  name: "AFooter",
});

const ns = useNamespace("footer");
</script>

<style scoped></style>
