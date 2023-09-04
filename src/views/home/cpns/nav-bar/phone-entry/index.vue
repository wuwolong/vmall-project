<script lang="ts" setup>
import webAndriod from '@/assets/imgs/web-android.vue'
import webWechat from '@/assets/imgs/web-wechat.vue'
import webIphone from '@/assets/imgs/web-iphone.vue'
</script>

<template>
  <div class="phone-entry">
    <div>
      <div class="code">
        <a href="#" class="flex-center">
          <img class="code-img" src="@/assets/imgs/code.webp" alt="" />
        </a>
      </div>
      <div class="plat grid-row-5">
        <h2 class="f-14 f-strong">华为商城APP</h2>
        <span class="color-hoverColor">新人专享好礼</span>
        <span class="color-hoverColor">最高5000积分</span>
        <div class="icon row-2 grid-col-3">
          <a href="#" class="flex-center" style="color: #777; font-size: 12px">
            <web-andriod></web-andriod>
            <span>Andriod</span>
          </a>
          <a href="#" class="flex-center" style="color: #777; font-size: 12px">
            <web-wechat></web-wechat>
            <span>WeChat</span>
          </a>
          <a href="#" class="flex-center" style="color: #777; font-size: 12px">
            <web-iphone></web-iphone>
            <span>iPhone</span>
          </a>
        </div>
      </div>
    </div>
    <div>
      <div class="code">
        <a href="#" class="flex-center">
          <img class="code-img" src="@/assets/imgs/code.webp" alt="" />
        </a>
      </div>
      <div class="plat grid-row-5">
        <h2 class="f-14 f-strong">华为商城APP</h2>
        <span class="color-hoverColor">新人专享好礼</span>
        <span class="color-hoverColor">最高5000积分</span>
        <div class="icon row-2 grid-col-3">
          <a href="#" class="flex-center" style="color: #777; font-size: 12px">
            <web-andriod></web-andriod>
            <span>Andriod</span>
          </a>
          <a href="#" class="flex-center" style="color: #777; font-size: 12px">
            <web-wechat></web-wechat>
            <span>WeChat</span>
          </a>
          <a href="#" class="flex-center" style="color: #777; font-size: 12px">
            <web-iphone></web-iphone>
            <span>iPhone</span>
          </a>
        </div>
      </div>
    </div>
    <div>
      <div class="code">
        <a href="#" class="flex-center">
          <img class="code-img" src="@/assets/imgs/code.webp" alt="" />
        </a>
      </div>
      <div class="plat grid-row-5">
        <h2 class="f-14 f-strong">华为商城APP</h2>
        <span class="color-hoverColor">新人专享好礼</span>
        <span class="color-hoverColor">最高5000积分</span>
        <div class="icon row-2 grid-col-3">
          <a href="#" class="flex-center" style="color: #777; font-size: 12px">
            <web-andriod></web-andriod>
            <span>Andriod</span>
          </a>
          <a href="#" class="flex-center" style="color: #777; font-size: 12px">
            <web-wechat></web-wechat>
            <span>WeChat</span>
          </a>
          <a href="#" class="flex-center" style="color: #777; font-size: 12px">
            <web-iphone></web-iphone>
            <span>iPhone</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.phone-entry {
  position: absolute;
  right: 0;
  top: 100%;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  background-color: #fff;
  line-height: 1.2rem;
  > div {
    display: grid;
    grid-template-columns: 90px 120px;
    column-gap: 10px;
    padding: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    &:last-of-type {
      border-bottom: none;
    }
    .plat {
      height: 90px;
      padding: 5px 0;
      box-sizing: border-box;

      .icon {
        height: 32px;

        a {
          display: grid;
          grid-template-rows: 25px 1fr;
          justify-items: center;
          margin-left: -20px;
          /* margin-bottom: -20px; */
          span {
            transform: scale(0.7);
          }
        }
      }
    }
  }
  .code-img {
    width: 90px;
    height: 90px;
  }
}
</style>
