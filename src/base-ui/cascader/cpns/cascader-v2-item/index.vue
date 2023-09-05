<script lang="ts" setup>
defineOptions({
  name: 'cascaderV2Item',
})
import { CategoryV2Data } from '@/mock/type'
const { item } = defineProps<{ item: CategoryV2Data }>()
</script>

<template>
  <div class="cascader-v2-item">
    <img :src="item.category2ImgUrl" />
    <span>{{ item.categoryName }}</span>
  </div>
</template>

<style lang="scss" scoped>
.cascader-v2-item {
  display: flex;
  align-items: center;
  width: 200px;
  height: 72px;
  box-sizing: border-box;
  img {
    width: 52px;
    height: 52px;
  }
  span {
    flex: 1;
    padding: 0 15px;
    color: #777;
    &:hover {
      color: $hoverColor;
    }
  }
}
</style>
