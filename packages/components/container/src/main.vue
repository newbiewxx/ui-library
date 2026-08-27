<template>
  <main :class="[ns.b()]">
    <slot>Main</slot>
  </main>
</template>

<script setup>
import { useNamespace } from "@ui-library/hooks";
import { useSonOfContainer } from "./composition";

defineOptions({
  name: "AMain",
});

const ns = useNamespace("main");
useSonOfContainer();
</script>

<style scoped></style>
