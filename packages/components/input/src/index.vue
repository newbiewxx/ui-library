<script setup>
import { useNamespace } from "@ui-library/hooks";

defineOptions({
  name: "AInput",
});

const ns = useNamespace("input");
</script>

<template>
  <div :class="[ns.b()]">
    <!-- 前置区域 -->
    <div :class="[ns.e('wrapper')]">
      <!-- 前缀区域 -->
      <input type="text" placeholder="请输入内容" :class="[ns.e('inner')]" />
      <!-- 后缀区域 -->
    </div>
    <!-- 后置区域 -->
  </div>
</template>
