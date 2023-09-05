<script lang="ts" setup>
defineOptions({
  name: 'AfterSale',
})
</script>

<template>
  <div class="after-sale">
    <div class="item">
      <img
        src="https://res.vmallres.com/uomcdn/CN/cms/202203/35029C2650265248A5C45BC46E0D7578.png"
        alt=""
      />
      <span>百强企业 品质保证</span>
    </div>
    <div class="item">
      <img
        src="https://res.vmallres.com/uomcdn/CN/cms/202203/848285C26D6B91405D84D71CC8D738F2.png"
        alt=""
      />
      <span>7天退货 15天换货</span>
    </div>
    <div class="item">
      <img
        src="https://res.vmallres.com/uomcdn/CN/cms/202203/09CE412E94E10830D00A2487756EBEE4.png"
        alt=""
      />
      <span>48元起免运费</span>
    </div>
    <div class="item">
      <img
        src="https://res.vmallres.com/uomcdn/CN/cms/202203/EABCAA990C477793FB6F09658BF80B82.png"
        alt=""
      />
      <span>2000家服务店 全国联保</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.after-sale {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  height: 102px;
  border-bottom: 1px solid #eee;
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 24px;
      height: 24px;
      margin-right: 20px;
    }
    span {
      font-size: 16px;
    }
  }
}
</style>
