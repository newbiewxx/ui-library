<template>
  <!-- 根元素 -->
  <div :class="[ns.b()]">
    <slot></slot>
  </div>
</template>

<script setup>
defineOptions({
  name: "ACheckboxGroup",
});

import { useNamespace } from "@ui-library/hooks";

const ns = useNamespace("checkbox-group");
</script>
