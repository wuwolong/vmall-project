<script lang="ts" setup>
defineOptions({
  name: 'cascaderV2Section',
})
import { CategoryV1Data } from '@/mock/type.ts'
import cascaderV2Item from '../cascader-v2-item/index.vue'
import MoreIcon from '@/assets/imgs/more-icon.vue'
const { v1Data } = defineProps<{ v1Data: CategoryV1Data }>()
</script>

<template>
  <div class="cascader-v2-section">
    <template v-for="item in v1Data?.category2List" :key="item.category2Id">
      <cascader-v2-item v-bind:item="item"></cascader-v2-item>
    </template>
    <div class="more">
      <div><more-icon></more-icon></div>
      <span>查看更多</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cascader-v2-section {
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(auto-fit, 220px);
  grid-auto-flow: column;
  /* grid-auto-columns: 520px; */
  align-items: center;
  justify-items: center;
  background-color: #fff;
  .more {
    display: flex;
    align-items: center;
    width: 200px;
    height: 72px;
    padding: 10px 60px 20px 10px;
    box-sizing: border-box;
    position: relative;
    & > div {
      position: absolute;
      top: 5px;
      left: 7px;
    }
    span {
      flex: 1;
      height: 50px;
      line-height: 50px;
      box-sizing: border-box;
      padding-left: 60px;
      font-size: 13px;
      color: #777;
      border: 1px solid #777;
      border-radius: 30px;
    }
  }
}
</style>
