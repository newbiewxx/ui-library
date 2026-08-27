<template>
  <aside :class="[ns.b()]">
    <slot>Aside</slot>
  </aside>
</template>

<script setup>
import { useNamespace } from "@ui-library/hooks";

defineOptions({
  name: "AAside",
});

const ns = useNamespace("aside");
</script>

<style scoped></style>
