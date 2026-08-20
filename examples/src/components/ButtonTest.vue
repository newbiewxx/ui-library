<script setup>
// import { AButton } from "../../../packages";
</script>

<template>
  <p>基础按钮</p>
  <div class="row-gap">
    <a-button>默认</a-button>
    <a-button type="primary">主要</a-button>
    <a-button type="success">成功</a-button>
    <a-button type="warning">警告</a-button>
    <a-button type="error">错误</a-button>
  </div>
</template>

<style scoped>
.row-gap {
  display: flex;
  gap: 0 10px;
}
</style>
