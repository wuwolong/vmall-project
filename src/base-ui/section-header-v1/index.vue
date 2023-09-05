<script lang="ts" setup>
import RightArrow from '@/assets/imgs/right-arrow.vue'

defineOptions({
  name: 'SectionHeaderV1',
})
const { title } = defineProps({
  title: {
    type: String,
  },
})
</script>

<template>
  <div class="section-header">
    <h1>{{ title }}</h1>
    <div class="more">
      <span>更多</span>
      <RightArrow :height="17" :width="17" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  h1 {
    font-size: 24px;
    font-weight: 500;
  }
  .more {
    display: flex;
    align-items: center;
    span {
      font-size: 14px;
      color: #000;
    }
  }
}
</style>
