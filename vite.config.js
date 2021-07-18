import { defineConfig } from 'vite'
import { EsLinter, linterPlugin, TypeScriptLinter } from 'vite-plugin-linter'
import vitePluginString from 'vite-plugin-string'

export default defineConfig((configEnv) => ({
  plugins: [
    vitePluginString(),
    linterPlugin({
      include: ['./src/**/*.ts', './src/**/*.tsx'],
      linters: [new EsLinter({ configEnv: configEnv, serveOptions: { fix: true } }), new TypeScriptLinter()]
    })
  ]
}))
