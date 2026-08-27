<template>
  <div :class="[ns.b(), ns.is('vertical', isVertical)]">
    <slot></slot>
  </div>
</template>

<script setup>
import { useNamespace } from "@ui-library/hooks";
import { computed } from "vue";

defineOptions({
  name: "AContainer",
});

const { direction } = defineProps({
  direction: {
    type: String,
    // 默认情况下，让子元素在横向上进行排列
    default: "horizontal",
  },
});

const ns = useNamespace("container");

const isVertical = computed(() => direction === "vertical");
</script>

<style scoped></style>
