import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview'
import vueKanban from 'vue-kanban'
import 'iview/dist/styles/iview.css'
import '@/assets/css/init.css'
import { loadCss } from 'utils/common'

Vue.use(iView)
Vue.use(vueKanban)

loadCss(
  'https://cdn.bootcss.com/highlight.js/9.15.10/styles/atom-one-dark.min.css'
)

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/wanted/sw.js', { scope: '/wanted/' })
    .then(function(reg) {
      if (reg.installing) {
        console.log('Service worker installing')
      } else if (reg.waiting) {
        console.log('Service worker installed')
      } else if (reg.active) {
        console.log('Service worker active')
      }
    })
    .catch(function(error) {
      // registration failed
      console.log('Registration failed with ' + error)
    })
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
