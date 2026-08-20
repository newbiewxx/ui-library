<script setup>
import { useNamespace } from "@ui-library/hooks";
defineOptions({
  name: "AButton",
});

const ns = useNamespace("button");

console.log("组件的命名空间: => ", ns.namespace);
console.log("组件的块类名: => ", ns.b("wrapper"));
console.log(ns.e("item"));
console.log(ns.m("rounded"));
console.log(ns.m("size", "small"));
console.log(ns.is("active", true));
</script>

<template>
  <button :class="[ns.b(), ns.m('primary')]">测试按钮</button>
</template>

<style></style>
