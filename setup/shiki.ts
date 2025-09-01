import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: 'github-dark-high-contrast',
      light: 'github-dark-high-contrast',
    },
    langs: [
      'javascript',
      'typescript',
      'tsx',
      'jsx',
      'json',
      'css',
      'html',
      'bash',
      'md',
      'markdown'
    ],
    transformers: [
      // Add any transformers you need
    ],
  }
})