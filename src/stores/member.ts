import { defineStore } from 'pinia'

export const useMemberStore = defineStore(
  'member',
  () => {
    const profile = ref({
      userId: 0,
      userName: '',
    })

    function setProfile(val: typeof profile.value) {
      profile.value = val
    }

    function clearProfile() {
      profile.value = {
        userId: 0,
        userName: '',
      }
    }

    return { profile, setProfile, clearProfile }
  },
  {
    persist: true,
  }
)
