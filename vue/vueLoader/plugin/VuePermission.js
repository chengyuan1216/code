export default function(Vue, options) {
    Vue.prototype.$per = function(key) {
        // console.log(this.$options.__permission)
        let __permission = this.$options.__permission || {}
        return __permission[key] || ''
    }

    // Vue.directive('permission', {
    //     inserted(el, binding, vnode) {
    //       console.log(vnode)
    //       let arg = binding.arg || ''
    //       if (!pass) {
    //         vnode.componentInstance && vnode.componentInstance.$destroy()
    //         el.parentNode && el.parentNode.removeChild(el)
    //       }
    //     }
    // })
}