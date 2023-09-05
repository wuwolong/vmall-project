<template>
  <nav-bar></nav-bar>
  <major-business></major-business>
  <banner></banner>
  <product-category></product-category>
  <recommend></recommend>
  <phone></phone>
  <footer-content></footer-content>
  <side-button></side-button>
</template>

<script lang="ts" setup>
import navBar from './cpns/nav-bar/index.vue'
import majorBusiness from './cpns/major-business/index.vue'
import banner from './cpns/banner/index.vue'
import productCategory from './cpns/product-category/index.vue'
import recommend from './cpns/recommend/index.vue'
import phone from './cpns/phone/index.vue'
import footerContent from './cpns/footer/index.vue'
import sideButton from '@/base-ui/side-button/index.vue'
</script>

<style lang="scss" scoped></style>
