<script setup>
import { useNamespace } from "@ui-library/hooks";
import { provide } from "vue";

defineOptions({
  name: "AButtonGroup",
});

const ns = useNamespace("button-group");

const { size, type } = defineProps({
  type: {
    type: String,
    default: "default",
  },
  size: {
    type: String,
    default: "default",
  },
});

provide("isGroup", true);
provide("groupSize", size);
provide("groupType", type);
</script>

<template>
  <div :class="[ns.b()]">
    <slot></slot>
  </div>
</template>

<style></style>
