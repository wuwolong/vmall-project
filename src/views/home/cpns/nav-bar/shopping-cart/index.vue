<script lang="ts" setup>
import webShopCart from '@/assets/imgs/web-shop-cart.vue'
</script>

<template>
  <div class="shopping-cart">
    <web-shop-cart :height="100" :width="100" fillColor="#777"></web-shop-cart>
    <span>您的购物车是空的，赶紧选购吧~</span>
  </div>
</template>

<style lang="scss" scoped>
.shopping-cart {
  position: absolute;
  right: 0;
  top: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 200px;
  box-shadow: 0 5px 5px #f5f5f5;

  background-color: #fff;
  span {
    color: #777;
  }
}
</style>
