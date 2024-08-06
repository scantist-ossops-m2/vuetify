import { createFilter } from 'vite'
import type { Plugin } from 'vite'

export function Windows (include = [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.md\?vue/]) {
  const filter = createFilter(include)
  return {
    name: 'vuetify:windows',
    enforce: 'post',
    transform (code, id) {
      if (filter(id)) {
        return {
          code: code.replace(/vuetify\/lib\/..\/src\//g, 'vuetify/lib/'),
          map: null,
        }
      }

      return undefined
    },
  } satisfies Plugin
}
