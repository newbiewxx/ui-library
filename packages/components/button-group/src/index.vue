<script setup>
import { useNamespace } from "@ui-library/hooks";
import { provide } from "vue";

defineOptions({
  name: "AButtonGroup",
});

const ns = useNamespace("button-group");

provide("isGroup", true);
</script>

<template>
  <div :class="[ns.b()]">
    <slot></slot>
  </div>
</template>

<style></style>
