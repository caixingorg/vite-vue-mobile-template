/**
 * 生产环境压缩图片大小
 * https://github.com/anncwb/vite-plugin-imagemin
 */

import type { Plugin } from 'vite'
import styleImport from 'vite-plugin-style-import'

export function vantStyleImport(): Plugin {
  const plugin: Plugin = styleImport({
    libs: [
      {
        libraryName: 'vant',
        esModule: true,
        resolveStyle: (name) => `vant/es/${name}/style/index`,
      },
    ],
  })
  return plugin
}
