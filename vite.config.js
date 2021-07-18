import vitePluginString from 'vite-plugin-string'
import viteESLint from '@ehutch79/vite-eslint'

export default {
  plugins: [
    vitePluginString(),
    viteESLint({ include: ['./src/**/*.ts', './src/**/*.tsx'] })
  ]
}
