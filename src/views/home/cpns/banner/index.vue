<script lang="ts" setup>
defineOptions({
  name: 'Banner',
})
import { reqGetCategoryData } from '@/service/home'
import { CategoryData } from '@/mock/type'
const categoryList = ref<CategoryData>([])
reqGetCategoryData().then((res) => {
  categoryList.value = res.dataList
})
const bannerImgList = ref([
  'https://res.vmallres.com/cmscdn/CN/2023-08/3e4ccab6cf14465b8ba79c1683427d28.jpg',
  'https://res.vmallres.com/cmscdn/CN/2023-08/ccee753b85064751a586ad4b2d9cec75.jpg',
  'https://res.vmallres.com/cmscdn/CN/2023-09/f82a48e61c6b4c6c896d6a8cc916ad0e.jpg',
  'https://res.vmallres.com/cmscdn/CN/2023-09/5cae649e234a46eeba841d931ce1315e.jpg',
  'https://res.vmallres.com/cmscdn/CN/2023-08/3e4ccab6cf14465b8ba79c1683427d28.jpg',
  'https://res.vmallres.com//uomcdn/CN/ams/202308/A52E70AB5A21F95D93ED2D3D2AFFD9A9.jpg',
  'https://res.vmallres.com/cmscdn/CN/2023-08/2c0ebab6087c404e9634e94e4c9ef660.jpg',
])
const pointer = ref(6)
function changePointer(index: number): void {
  pointer.value = index
  if (timer) clearInterval(timer)
  onOffTimer()
}
let timer: any = null
function onOffTimer() {
  timer = setInterval(() => {
    if (pointer.value < bannerImgList.value.length - 1) {
      pointer.value++
    } else {
      pointer.value = 0
    }
  }, 5000)
}
onOffTimer()

import cascader from '@/base-ui/cascader/index.vue'
</script>

<template>
  <div
    class="banner"
    :style="{ backgroundImage: `url(${bannerImgList[pointer]})` }"
  >
    <div class="wrapper">
      <ul class="indicator">
        <li
          v-for="index in bannerImgList.length"
          :key="index"
          :class="{
            active: index === pointer + 1 ? true : false,
            'flex-center': true,
          }"
          @click="changePointer(index - 1)"
        >
          <div></div>
        </li>
      </ul>
      <div class="cascader">
        <cascader :data="categoryList"></cascader>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  position: relative;
  height: 550px;
  background: center/cover no-repeat;
  .indicator {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99;
    display: flex;
    width: 144px;
    height: 32px;
    align-items: center;
    li {
      flex: 1;
      div {
        width: 10px;
        height: 10px;
        border-radius: 5px;
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.2);
      }
      &.active {
        flex: 0 0 24px;
        div {
          width: 20px;
          height: 10px;
          border-radius: 5px;
          background-color: #fff;
        }
      }
    }
  }
  .wrapper {
    display: flex;
    align-items: center;
    height: 100%;
    .cascader {
      height: 496px;
      min-width: 200px;
    }
  }
}
</style>
