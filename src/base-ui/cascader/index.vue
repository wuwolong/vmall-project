<script lang="ts" setup>
defineOptions({
  name: 'Cascader',
})
import { CategoryData } from '@/mock/type'
import { throttle } from '@/utils/index'
import cascaderV1Item from './cpns/cascader-v1-item/index.vue'
import cascaderV2Section from './cpns/cascader-v2-section/index.vue'
// const { data } = withDefaults(defineProps<{ data: CategoryData }>(), {
//   data: () => [],
// })
const { data } = defineProps<{ data: CategoryData }>()
const currentIndex = ref<number>(0)
const isShowSection = ref(false)
const handlerSelectCate = throttle(function (e: any) {
  if ((e.target.dataset.title as string) === 'v1') {
    const index = e.target.dataset.index
    if (index != currentIndex.value) {
      currentIndex.value = index
    }
  }
}, 200)
</script>

<template>
  <div
    class="cascader-root"
    @mouseenter="
      () => {
        isShowSection = true
      }
    "
    @mouseleave="
      () => {
        isShowSection = false
      }
    "
  >
    <div class="sidebar" @mouseover="handlerSelectCate($event)">
      <template v-for="(item, index) in data" :key="item?.category1Id">
        <cascader-v1-item :label="item?.categoryName" :selfIndex="index" />
      </template>
    </div>
    <cascader-v2-section
      :v1Data="data[currentIndex]"
      v-show="isShowSection"
    ></cascader-v2-section>
  </div>
</template>

<style lang="scss" scoped>
.cascader-root {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 496px;
  width: 100%;
  height: 496px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  .sidebar {
    min-width: 200px;
    height: 100%;
    padding: 10px 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.9);
  }
}
</style>
