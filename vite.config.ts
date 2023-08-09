import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImports from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    AutoImports({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.vue\?mpType/, /\.md$/],
      imports: ['vue', 'uni-app'],
      dts: true,
    }),
  ],
})
