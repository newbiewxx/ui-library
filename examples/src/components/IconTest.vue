<script setup>
import { ref } from "vue";

const color = ref("red");
const changeColor = () => {
  color.value = color.value === "red" ? "black" : "red";
};

const size = ref(30);
const changeSize = () => {
  size.value += 5;
};
</script>

<template>
  <p>图标组件</p>
  <a-button-group>
    <a-button type="primary" @click="changeColor">change color</a-button>
    <a-button type="success" @click="changeSize">change size</a-button>
  </a-button-group>
  <div class="row-gap">
    <a-icon :color :size>
      <span class="iconfont icon-business-icon-buyers-club-fill"></span>
    </a-icon>
  </div>
</template>

<style>
.row-gap {
  display: flex;
  gap: 0 10px;
  align-items: center;
  margin-bottom: 10px;
}

.col-gap {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-bottom: 10px;
}
</style>
