<script lang="ts" setup>
import DropDown from '@/base-ui/drop-down/index.vue'
import webShopCart from '@/assets/imgs/web-shop-cart.vue'
import siteNav from '../nav-bar/site-nav/index.vue'
import phoneEntry from '../nav-bar/phone-entry/index.vue'
import shoppingCart from '../nav-bar/shopping-cart/index.vue'
</script>
<template>
  <div class="nav-bar">
    <div class="wrapper">
      <div class="left">
        <ul>
          <li><a href="#">首页</a></li>
          <li class="split"><a href="#">华为官网</a></li>
          <li class="split"><a href="#">V码(优购码)</a></li>
          <li class="split"><a href="#">企业购</a></li>
          <li class="split"><a href="#">Select Region</a></li>
          <drop-down>
            <template #title> 更多精彩&nbsp; </template>
            <template #content>
              <dl class="dropdown-more">
                <dt><a href="#">HarmonyOS</a></dt>
                <dt><a href="#">应用市场</a></dt>
                <dt><a href="#">华为终端云空间</a></dt>
                <dt><a href="#">开发者联盟</a></dt>
              </dl>
            </template>
          </drop-down>
        </ul>
      </div>
      <div class="right">
        <ul>
          <li><a href="#">请登录</a></li>
          <li><a href="#">注册</a></li>
          <li class="split"><a href="#">我的订单</a></li>
          <drop-down>
            <template #title> 客服 </template>
            <template #content>
              <dl class="dropdown-customer-service">
                <dt><a href="#">服务中心</a></dt>
                <dt><a href="#">联系客服</a></dt>
              </dl>
            </template>
          </drop-down>
          <drop-down>
            <template #title> 网站导航 </template>
            <template #content>
              <site-nav></site-nav>
            </template>
          </drop-down>
          <drop-down>
            <template #title> 手机版 </template>
            <template #content>
              <phone-entry></phone-entry>
            </template>
          </drop-down>
          <drop-down :is-icon="false" bgc="#424242">
            <template #title="{ isDropDown }"
              ><webShopCart :fill-color="!isDropDown ? '#fff' : '#cb242b'" />
              购物车(0)
            </template>
            <template #content>
              <shopping-cart></shopping-cart>
            </template>
          </drop-down>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav-bar {
  height: 36px;
  line-height: 36px;
  background-color: #000;
  border-radius: 0;
  .wrapper {
    height: 100%;
    display: flex;
    justify-content: space-between;

    a {
      color: rgba(255, 255, 255, 0.6);
      &:hover {
        color: #fff;
      }
    }
    ul {
      display: flex;
      li {
        display: flex;
        align-items: center;
        height: 36px !important;
      }
    }
    .left {
      ul {
        li {
          padding: 0 4px;
          &:first-of-type {
            padding-left: 0;
          }
        }
        /* position: relative; */
        .dropdown-more {
          width: 140%;
          position: absolute;
          top: 100%;
          right: 0;
          z-index: 9;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #fff;
          a {
            color: #777;
            &:hover {
              color: $hoverColor;
            }
          }
        }
      }
    }
    .right {
      ul {
        li {
          padding: 0 4px;
        }
        .dropdown-customer-service {
          width: 120%;
          width: 140%;
          position: absolute;
          top: 100%;
          right: 0;
          z-index: 9;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #fff;
          a {
            color: #777;
            &:hover {
              color: $hoverColor;
            }
          }
        }
      }
    }
  }
}
</style>
