import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { inject } from '@vercel/analytics'
import VersionFooter from './VersionFooter.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp() {
    inject()
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(VersionFooter),
    })
  },
}
