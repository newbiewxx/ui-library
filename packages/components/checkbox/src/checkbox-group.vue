<template>
  <!-- 根元素 -->
  <div :class="[ns.b()]">
    <slot></slot>
  </div>
</template>

<script setup>
import { toRefs, provide } from "vue";
import { CHECKBOX_GROUP_PROPS } from "./constant";
import { useNamespace } from "@ui-library/hooks";

defineOptions({
  name: "ACheckboxGroup",
});

const props = defineProps({
  size: {
    type: String,
    default: "default",
  },
});

provide(CHECKBOX_GROUP_PROPS, { ...toRefs(props) });

const ns = useNamespace("checkbox-group");
</script>
