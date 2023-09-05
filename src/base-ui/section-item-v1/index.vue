<script lang="ts" setup>
import { RecommendData } from '@/mock/type'

defineOptions({
  name: 'SectionItemV1',
})
const { item } = defineProps<{ item: RecommendData }>()
</script>

<template>
  <a class="section-item">
    <div class="img" :style="{ backgroundImage: `url(${item.goodImgUrl})` }">
      <!-- <img :src="item.goodImgUrl" alt="" /> -->
    </div>
    <div class="info">
      <div class="name">{{ item.goodName }}</div>
      <div class="desc">
        <span
          v-for="(desc, index) in item.desc"
          :key="desc"
          :class="{ split: index != 0 }"
          >{{ desc }}</span
        >
      </div>
      <div class="discount">
        <span
          class="dicount-border"
          :class="{ 'dicount-border-highlight': index == 0 }"
          v-for="(discount, index) in item.discount"
          :key="discount"
        >
          {{ discount }}
        </span>
      </div>
      <div class="price">
        <span class="new">¥ {{ item.newPrice }}</span>
        <span class="old" v-if="item.oldPrice">¥ {{ item.oldPrice }}</span>
      </div>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.section-item {
  /* display: flex; */
  display: grid;
  grid-template-rows: 2fr 1fr;
  align-items: stretch;
  height: 386px;
  box-sizing: border-box;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 8px rgba($color: #000000, $alpha: 0.1);
  }
  .img {
    overflow: hidden;
    background-position: center;
    background-size: cover;
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    .name {
      font-size: 14px;
      color: #000;
    }
    .desc {
      span {
        font-size: 13px;
        color: #777;
      }
      .split::before {
        color: #777;
        margin: 0 4px;
      }
    }
    .discount {
      span {
        padding: 0 5px;
      }
    }
    .price {
      .new {
        font-size: 16px;
      }
      .old {
        margin-left: 4px;
        font-size: 12px;
        text-decoration: line-through;
        color: #777;
      }
    }
  }
}
</style>
