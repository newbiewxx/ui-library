<template>
  <aside :class="[ns.b()]" :style="[styledWidth]">
    <slot>Aside</slot>
  </aside>
</template>

<script setup>
import { useNamespace, useStyle } from "@ui-library/hooks";
import { computed } from "vue";
import { useSonOfContainer } from "./composition";

defineOptions({
  name: "AAside",
});

const { width } = defineProps({
  width: {
    type: String,
    default: "300px",
  },
});

const ns = useNamespace("aside");

const uStyle = useStyle();
const styledWidth = computed(() => uStyle.width(width));

useSonOfContainer();
</script>

<style scoped></style>
