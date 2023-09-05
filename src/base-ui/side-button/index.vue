<script lang="ts" setup>
defineOptions({
  name: 'SideButton',
})
import serviceIcon from '@/assets/imgs/service-icon.vue'
import selfServiceIcon from '@/assets/imgs/self-service-icon.vue'
import topArrowIcon from '@/assets/imgs/top-arrow-icon.vue'
import { useScroll, toScrollTop } from '@/utils'
const currentIndex = ref(-1)
const { scrollX, scrollY } = useScroll()
// const mouseover = throttle(function (e: any) {
//   console.log(e.target)
//   if (e.target?.dataset?.index) {
//     currentIndex.value = e.target.dataset.index
//     console.log(currentIndex.value)
//   }
// }, 100)
console.log(scrollX, scrollY)
</script>

<template>
  <div
    class="side-buttton"
    @mouseleave="
      () => {
        currentIndex = -1
      }
    "
  >
    <div
      title="div"
      :data-index="1"
      @mouseenter="
        () => {
          currentIndex = 1
        }
      "
    >
      <serviceIcon :fill-color="currentIndex == 1 ? '#cb242b' : '#777'" />
      <span>在线客服</span>
    </div>
    <div
      title="div"
      :data-index="2"
      @mouseenter="
        () => {
          currentIndex = 2
        }
      "
    >
      <selfServiceIcon :fill-color="currentIndex == 2 ? '#cb242b' : '#777'" />
      <span>自助服务</span>
    </div>
    <div
      title="div"
      :data-index="3"
      @mouseenter="
        () => {
          currentIndex = 3
        }
      "
      v-if="scrollY > 500"
      @click="toScrollTop"
    >
      <topArrowIcon :fill-color="currentIndex == 3 ? '#cb242b' : '#777'" />
      <span>回到顶部</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.side-buttton {
  position: fixed;
  bottom: 100px;
  right: 10px;
  display: grid;
  grid-template-columns: 80px;
  grid-auto-rows: 56px;
  align-items: stretch;
  justify-items: stretch;
  width: 80px;
  padding: 20px 0;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 6px;
  background-color: #fff;
  cursor: pointer;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &:hover {
      span {
        color: $hoverColor;
      }
    }
    span {
      margin-top: 8px;
      line-height: 1em;
      color: #777;
    }
  }
}
</style>
