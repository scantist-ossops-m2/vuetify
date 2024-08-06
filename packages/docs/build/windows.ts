import { createFilter } from 'vite'
import type { Plugin } from 'vite'
import process from 'node:process'

export function Windows (include: RegExp[]) {
  if (process.platform !== 'win32') {
    return undefined
  }

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
