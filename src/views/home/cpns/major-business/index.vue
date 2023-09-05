<script lang="ts" setup>
import searchIcon from '@/assets/imgs/search-icon.vue'
import { useScroll } from '@/utils'
const { scrollY } = useScroll()
</script>

<template>
  <div class="spare-tire" v-if="scrollY >= 100"></div>
  <div class="major-business" :class="{ 'fixed-top': scrollY >= 100 }">
    <div class="wrapper">
      <div class="logo">
        <a href="#">
          <img
            src="https://res.vmallres.com/portal/1.23.8.300/h5/images/logo_app.png"
            alt=""
          />
        </a>
      </div>
      <ul class="category">
        <li>
          <a href="#">华为</a>
        </li>
        <li>
          <a href="#">AITO汽车</a>
        </li>
        <li>
          <a href="#">华为智选</a>
        </li>
        <li>
          <a href="#">生态周边</a>
        </li>
      </ul>
      <div class="search">
        <searchIcon />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.spare-tire {
  height: 148px;
}
.fixed-top {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  background-color: #fff;
}
.major-business {
  .wrapper {
    height: 74px;
    /* background-color: red; */
    display: flex;
    align-items: center;
    .logo {
      a {
        img {
          height: 74px;
        }
      }
    }
    .category {
      flex: 1;
      padding: 0 30px;
      display: flex;
      li {
        margin-left: 30px;
        a {
          color: #000;
          font-size: 16px;
          &:hover {
            color: $hoverColor;
          }
        }
      }
    }
    .search {
      flex: 0 0 40px;
      align-self: center;
      text-align: right;
    }
  }
}
</style>
