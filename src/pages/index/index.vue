<template>
  <div class="content">
    <image class="logo" src="/static/logo.png" />

    <div class="text-area">
      <button @click="gotoAboutPage">{{ msg }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const msg = ref('前往关于页面')

function gotoAboutPage() {
  uni.navigateTo({
    url: '/pages/about/index',
  })
}
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logo {
    width: 200rpx;
    height: 200rpx;
    margin-top: 200rpx;
    margin-right: auto;
    margin-bottom: 50rpx;
    margin-left: auto;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }
}
</style>
