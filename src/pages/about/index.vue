<template>
  <div class="container">
    <div class="title text-center">这是about页面</div>
    <button @click="backHome">返回首页</button>
    <button @click="getData" type="primary">获取数据</button>
    <button @click="memberStore.clearProfile" type="warn">清空本地存储</button>
    <div class="text-center">{{ memberStore.profile }}</div>
  </div>
</template>

<script lang="ts" setup>
import { http } from '@/utils/http'
import { useMemberStore } from '@/stores'

const memberStore = useMemberStore()

function backHome() {
  uni.navigateBack()
}

interface IUser {
  userId: number
  userName: string
  userRole: number
  userEmail: string
  userAvatar: string
}

async function getData() {
  const res = await http<IUser>('/user/9')

  const { userId, userName } = res.data

  memberStore.setProfile({
    userId,
    userName,
  })
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.title {
  font-size: 40rpx;
  font-weight: bold;
  padding: 10rpx;
}
.text-center {
  text-align: center;
}
</style>
