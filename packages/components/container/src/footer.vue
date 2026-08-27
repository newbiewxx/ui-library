<template>
  <footer :class="[ns.b()]" class="footer">
    <slot>Footer</slot>
  </footer>
</template>

<script setup>
import { useNamespace } from "@ui-library/hooks";
import { useSonOfContainer } from "./composables";

defineOptions({
  name: "AFooter",
});

const { height } = defineProps({
  height: {
    type: String,
    default: "60px",
  },
});

const ns = useNamespace("footer");

useSonOfContainer();
</script>

<style scoped>
.footer {
  height: v-bind(height);
  padding: 0 20px;
  box-sizing: border-box;
}
</style>
