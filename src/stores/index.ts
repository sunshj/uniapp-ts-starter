import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(
  createPersistedState({
    storage: {
      setItem(key, value) {
        uni.setStorageSync(key, value)
      },
      getItem(key) {
        return uni.getStorageSync(key)
      },
    },
  })
)

export default pinia

export * from './member'
