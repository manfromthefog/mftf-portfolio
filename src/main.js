import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './style.css'

import { inject } from '@vercel/analytics'

inject();
router.afterEach(() => {
  if (window.va) {
    window.va.track('pageview')
  }
})

createApp(App).use(router).mount('#app')