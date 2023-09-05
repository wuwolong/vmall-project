<script lang="ts" setup>
defineOptions({
  name: 'Footer',
})
import AfterSale from './after-sale/index'
</script>

<template>
  <div class="footer m-t-24">
    <div class="wrapper">
      <after-sale></after-sale>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  background-color: #fff;
  height: 300px;
}
</style>
