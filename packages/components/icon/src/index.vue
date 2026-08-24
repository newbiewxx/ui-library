<script setup>
import { useNamespace, useStyle } from "@ui-library/hooks";
import { computed } from "vue";

defineOptions({
  name: "AIcon",
});

const { color, size, icon } = defineProps({
  color: String,
  size: [String, Number],
  icon: [String, Object],
});

const ns = useNamespace("icon");
const uStyle = useStyle();

const styledFontSize = computed(() => uStyle.fontSize(size));
const styledColor = computed(() => uStyle.color(color));
const _isIconFont = computed(() => typeof icon === "string");
</script>

<template>
  <i :class="[ns.b()]" :style="[styledFontSize, styledColor]">
    <slot v-if="$slots.default"></slot>
    <template v-if="icon">
      <span class="iconfont" :class="icon" v-if="_isIconFont"></span>
      <component :is="icon" v-else></component>
    </template>
  </i>
</template>

<style></style>
