import Vue from 'vue'
import App from './App'
import store from './store'
import {uniIcons} from '@dcloudio/uni-ui'

import pageHead from './components/page-head.vue'
import pageFoot from './components/page-foot.vue'
import uLink from '@/components/uLink.vue'

Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

Vue.component('page-head', pageHead)
Vue.component('page-foot', pageFoot)
Vue.component('uLink', uLink)
// Vue.component('uniIcons', uniIcons)

const app = new Vue({
    ...App
})
app.$mount()
