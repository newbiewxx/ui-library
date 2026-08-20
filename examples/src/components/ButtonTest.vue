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

  <hr />

  <p>按钮圆角</p>
  <div class="row-gap">
    <a-button round>默认</a-button>
    <a-button type="primary" round>主要</a-button>
    <a-button type="success" round>成功</a-button>
    <a-button type="warning" round>警告</a-button>
    <a-button type="error" round>错误</a-button>
  </div>

  <hr />

  <p>禁用按钮</p>
  <div class="row-gap">
    <a-button disabled>默认</a-button>
    <a-button type="primary" disabled>主要</a-button>
    <a-button type="success" disabled>成功</a-button>
    <a-button type="warning" disabled>警告</a-button>
    <a-button type="error" disabled>错误</a-button>
  </div>
</template>

<style scoped>
.row-gap {
  display: flex;
  gap: 0 10px;
}
</style>
