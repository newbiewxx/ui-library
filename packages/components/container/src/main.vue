<template>
  <main :class="[ns.b()]">
    <slot>Main</slot>
  </main>
</template>

<script setup>
import { useNamespace } from "@ui-library/hooks";

defineOptions({
  name: "AMain",
});

const ns = useNamespace("main");
</script>

<style scoped></style>
