import Vue from 'vue'
import Index from './index.vue'
import About from './about.vue'
import VuePermission from '../plugin/VuePermission'
import Vue18n from 'vue-i18n'
Vue.use(VuePermission)

Vue.use(Vue18n)

const i18n = new Vue18n({
    locale: 'zh'   // 语言标识
})

new Vue({
    i18n,
    render(h){
        return h('div', {}, [
            h(Index),
            h(About)
        ])
    }
}).$mount('#app')

