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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
