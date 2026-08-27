<template>
  <div :class="[ns.b(), ns.is('vertical', isVertical)]">
    <slot></slot>
  </div>
</template>

<script setup>
import { useNamespace } from "@ui-library/hooks";
import { computed, useSlots } from "vue";

defineOptions({
  name: "AContainer",
});

const { direction } = defineProps({
  direction: {
    type: String,
    // 默认情况下，让子元素在横向上进行排列
    // horizontal 横向排列
    // vertical 纵向排列
    default: "",
  },
});

const ns = useNamespace("container");

// const isVertical = computed(() => direction === "vertical");
const slots = useSlots();
const isVertical = computed(() => {
  if (direction === "vertical") return true;
  if (direction === "horizontal") return false;

  const result = slots.default().some(item => ["AHeader", "AFooter"].includes(item.type.name));
  
  return result;
});
</script>

<style scoped></style>
