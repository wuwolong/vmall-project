<script lang="ts" setup>
defineOptions({
  name: 'cascaderV1Item',
})
import rightArrow from '@/assets/imgs/right-arrow.vue'
const { label, selfIndex } = defineProps<{ label: string; selfIndex: number }>()
</script>

<template>
  <div class="cascader-v1-item" :data-index="selfIndex" data-title="v1">
    <span>{{ label }}</span>
    <span><right-arrow /></span>
  </div>
</template>

<style lang="scss" scoped>
.cascader-v1-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 20px;
  flex: 1;
  background-color: #fff;
  color: #777;
}
</style>
