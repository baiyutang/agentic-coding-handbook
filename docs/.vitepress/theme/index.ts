import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import VersionFooter from './VersionFooter.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp() {
    // Only inject analytics on client-side
    if (!import.meta.env.SSR) {
      import('@vercel/analytics').then(({ inject }) => {
        inject()
      })
    }
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(VersionFooter),
    })
  },
}
