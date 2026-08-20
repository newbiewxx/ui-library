<script setup>
import { useNamespace } from "@ui-library/hooks";
defineOptions({
  name: "AButton",
});

const ns = useNamespace();

console.log("组件的命名空间: => ", ns.namespace);
</script>

<template>
  <button>测试按钮</button>
</template>

<style></style>
