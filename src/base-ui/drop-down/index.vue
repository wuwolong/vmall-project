<script lang="ts" setup>
const { isIcon, bgc } = defineProps({
  isIcon: {
    type: Boolean,
    default: true,
  },
  bgc: {
    type: String,
    default: 'transparent',
  },
})
function dropDown() {
  isDropDown.value = true
}
function putAway() {
  isDropDown.value = false
}
const isDropDown = ref(false)
const iconClass = computed(() => {
  return isIcon ? (!isDropDown.value ? 'drop-down-icon' : 'put-away-icon') : ''
})
</script>

<template>
  <div
    class="drop-down"
    :style="{ backgroundColor: isDropDown ? '#fff' : bgc }"
    @mouseenter="dropDown"
    @mouseleave="putAway"
  >
    <div class="drop-down-title" :class="iconClass">
      <a
        href="#"
        :class="{ split: isIcon }"
        :style="{ color: isDropDown ? '#cb242b' : 'rgba(256,256,256,.6)' }"
        ><slot name="title" :isDropDown="isDropDown"></slot
      ></a>
    </div>
    <div class="drop-down-content" v-show="isDropDown">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style lang="css" scoped>
.drop-down {
  height: 100%;
  position: relative;
  padding: 0 4px;
  /* .drop-down-title {
    a.split {
      display: flex;
      align-items: center;
    }
  } */
  /* background-color: var(#{'--global:bcc'}); */
}

</style>
