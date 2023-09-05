<script lang="ts" setup>
defineOptions({
  name: 'Recommend',
})
import sectionHeaderV1 from '@/base-ui/section-header-v1/index.vue'
import sectionContent from '@/base-ui/section-content/index.vue'
import { reqRecommendData } from '@/service/home'
import { RecommendData } from '@/mock/type'
const recommendData = ref<RecommendData[]>([])
reqRecommendData().then((res) => {
  recommendData.value = res.data as unknown as RecommendData[]
})
</script>

<template>
  <div id="recommend" class="wrapper m-t-24">
    <section-header-v1 title="甄选推荐"></section-header-v1>
    <section-content :data="recommendData"></section-content>
  </div>
</template>

<style lang="scss" scoped></style>
