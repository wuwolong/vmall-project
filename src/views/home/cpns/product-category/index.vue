<script lang="ts" setup>
defineOptions({
  name: 'ProductCategory',
})
import { ProductCategory } from '@/mock/type'
import { reqProductCategoryData } from '@/service/home/index.ts'
const productCategoryData = ref<ProductCategory>()
reqProductCategoryData().then((res) => {
  productCategoryData.value = res.data
})
// console.log(productCategoryData.value)
</script>

<template>
  <div class="product-category wrapper">
    <template
      v-for="(item) in (productCategoryData as unknown as ProductCategory[])"
      :key="item.productId"
    >
      <div class="item">
        <div
          class="bgc"
          :style="{ backgroundImage: `url(${item.bgcUrl})` }"
        ></div>
        <div class="name">{{ item.productName }}</div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.product-category {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  height: 190px;
  margin-top: 24px;
  cursor: pointer;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover {
      .bgc {
        background-size: 110%;
      }
      .name {
        font-size: 14px;
        font-weight: 700;
      }
    }
    .bgc {
      width: 48px;
      height: 48px;
      background-position: center;
      background-size: cover;
    }
    .name {
      font-size: 14px;
    }
  }
}
</style>
