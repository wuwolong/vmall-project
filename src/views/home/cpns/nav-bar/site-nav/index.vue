<script lang="ts" setup>
import webHome from '@/assets/imgs/web-home.vue'
</script>

<template>
  <div class="site-nav">
    <div class="col-1">
      <a href="https://www.vmall.com" class="grid-row-7 grid-center"
        ><div
          style="
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #eee;
          "
          class="flex-center row-3"
        >
          <web-home></web-home>
        </div>
        <span class="row-1">商城首页</span></a
      >
    </div>

    <div class="col-2 grid-row-7 grid-vertical-center">
      <div class="row-2 col-2 font-16-700 color-333">频道</div>
      <div>
        <a href="https://www.vmall.com/huawei" target="_blank">华为专区</a>
      </div>
      <div>
        <a
          href="https://company.vmall.com/#/home"
          target="_blank"
          textvalue="企业购"
          >企业购</a
        >
      </div>
      <div>
        <a
          href="https://www.vmall.com/portal/activity/index.html?pn=educationcenterpc"
          target="_blank"
          >教育优惠</a
        >
      </div>
      <div>
        <a href="https://sale.vmall.com/hwharmony.html" target="_blank"
          >HarmonyOS</a
        >
      </div>
    </div>
    <div class="col-2 grid-row-7 grid-vertical-center">
      <div class="row-2 col-2 font-16-700 color-333">产品</div>
      <div>
        <a href="https://www.vmall.com/list-36" target="_blank">手机</a>
      </div>
      <div>
        <a href="https://www.vmall.com/list-676" target="_blank">笔记本</a>
      </div>
      <div>
        <a href="https://www.vmall.com/list-678" target="_blank">平板</a>
      </div>
      <div>
        <a href="https://www.vmall.com/list-59" target="_blank">智能穿戴</a>
      </div>
      <div>
        <a href="https://www.vmall.com/list-714" target="_blank">智能家居</a>
      </div>
      <div>
        <a href="https://www.vmall.com/list-646" target="_blank">智慧屏</a>
      </div>
      <div>
        <a href="https://www.vmall.com/list-652" target="_blank">耳机音箱</a>
      </div>
      <div>
        <a href="https://www.vmall.com/list-54" target="_blank">热销配件</a>
      </div>
      <div>
        <a href="https://www.vmall.com/list-43" target="_blank">生态产品</a>
      </div>
      <div>
        <a href="https://www.vmall.com/list-34" target="_blank">增值服务</a>
      </div>
    </div>
    <div class="col-2 grid-row-7 grid-vertical-center">
      <div class="row-2 col-2 font-16-700 color-333">增值服务</div>
      <div>
        <a
          href="https://www.vmall.com/recycle/landing"
          target="_blank"
          _href="https://www.vmall.com/recycle/landing"
          >以旧换新</a
        >
      </div>
      <div>
        <a href="https://www.vmall.com/member/buyServicesIndex" target="_blank"
          >补购保障</a
        >
      </div>
      <div>
        <a
          href="https://www.vmall.com/portal/activity/index.html?pageId=401082540"
          target="_blank"
          _href="https://www.vmall.com/portal/activity/index.html?pageId=401082540"
          textvalue="一口价换电池"
          >一口价换电池</a
        >
      </div>
      <div>
        <a href="https://www.vmall.com/member/buyServicesIndex" target="_blank"
          >音频延保</a
        >
      </div>
      <div>
        <a href="https://www.vmall.com/member/buyServicesIndex" target="_blank"
          >穿戴延保</a
        >
      </div>
      <div>
        <a href="https://www.vmall.com/member/buyServicesIndex" target="_blank"
          >智慧屏全质保</a
        >
      </div>
    </div>
    <div class="col-1 grid-row-7 grid-vertical-center">
      <div class="col-2 row-2 font-16-700 color-333">会员</div>
      <div>
        <a
          href="https://www.vmall.com/portal/activity/index.html?pn=huiyuanPC"
          target="_blank"
          >会员频道</a
        >
      </div>
    </div>
    <div class="col-1 grid-row-7 grid-vertical-center">
      <div class="col-2 row-2 font-16-700 color-333">商城公告</div>
      <div>
        <a
          href="https://www.vmall.com/notice-list/1"
          target="_blank"
          _href="https://www.vmall.com/notice-list/1"
          textvalue="商城公告"
          >商城公告</a
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.site-nav {
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 9;
  box-sizing: border-box;
  padding: 20px;
  width: 893px;
  display: grid;
  grid-template-columns: 100px repeat(8, 1fr);
  background-color: #fff;
  a {
    color: #777;
    &:hover {
      color: $hoverColor;
    }
  }
}
</style>
