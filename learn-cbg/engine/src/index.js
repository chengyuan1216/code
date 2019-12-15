import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Vuex from 'vuex'
import store from './vuex/index.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.prototype.VueConstructor = Vue

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
