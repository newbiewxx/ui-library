<script setup>
import { ref } from "vue";
import { Activity, Airplay, Bookmark, PlusCircle } from "@ui-library/icons";

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
  <p>图标组件 --- {{ color }} --- {{ size }}</p>
  <a-button-group>
    <a-button type="primary" @click="changeColor">change color</a-button>
    <a-button type="success" @click="changeSize">change size</a-button>
  </a-button-group>
  <div class="row-gap">
    <a-icon :color :size>
      <span class="iconfont icon-business-icon-buyers-club-fill"></span>
    </a-icon>

    <a-icon :color size="40px">
      <span class="iconfont icon-business-icon-buyers-club-fill"></span>
    </a-icon>
  </div>

  <p>Svg 图标</p>
  <div class="row-gap">
    <a-icon :color="color" :size="size">
      <!-- svg 的图标组件 -->
      <Activity />
    </a-icon>

    <a-icon :color="color" :size="size">
      <!-- svg 的图标组件 -->
      <Airplay />
    </a-icon>

    <a-icon :color="color" :size="size">
      <!-- svg 的图标组件 -->
      <Bookmark />
    </a-icon>
  </div>

  <p>Button 组件中使用 Icon 组件</p>
  <div class="row-gap">
    <a-button type="primary">
      <a-icon>
        <span class="iconfont icon-search"></span>
      </a-icon>
      按钮
      <a-icon>
        <PlusCircle />
      </a-icon>
    </a-button>

    <a-button type="error">
      <a-icon icon="icon-search" />
      按钮
      <a-icon :icon="PlusCircle" />
    </a-button>
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
