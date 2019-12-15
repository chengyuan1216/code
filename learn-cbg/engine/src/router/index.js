import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

var router = new Router({
    routes: [
        { path: '/', component:  () => import(/* webpackChunkName: "home" */ '@/pages/Home.vue') },
        { path: '/uploadCard', component:  () => import(/* webpackChunkName: "upload_card" */ '@/pages/UploadCard.vue') },
        { path: '/:pageid', component:  () => import(/* webpackChunkName: "page_container" */ '@/pages/PageContainer.vue') }
    ]
})

export default router
