import { createApp } from './app'

const { app, router, store } = createApp()

router.onReady(() => {
    app.$mount('#app')
})

/**
 *  为了和服务端渲染保持一致
 */
if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
}  