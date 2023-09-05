<script lang="ts" setup>
defineOptions({
  name: 'SectionContent',
})
import SectionItemV1 from '@/base-ui/section-item-v1/index.vue'
import { RecommendData } from '@/mock/type'

const { data } = defineProps<{ data: RecommendData[] }>()
</script>

<template>
  <div class="section-content">
    <template v-for="item in data" :key="item.productId">
      <section-item-v1 :item="item" />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.section-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
</style>
