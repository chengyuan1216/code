export default function (Vue, allPer) {
  let permission = {}
  let pagePerAlias = {}
  let moduleName = ''
  try {
    permission = allPer ? JSON.parse(JSON.stringify(allPer)) : {}
  } catch (e) {
    permission = {}
  }

  // v-permission:goods_lib.b.c.d.e="[1,2,3,4]"
  // goods_lib 模块名
  // 表示在goods_lid模块， 当 b = 1, c = 2, d = 3, e = 4时才有的权限
  // 指令的值可以是一个对象指定特定的参数的值{c:2}
  // 当指令的值不写默认是true
  // [[1,2,3,4],[3,3,3,4]] 表示满足其中一个条件即可

  Vue.directive('permission', {
    inserted(el, binding, vnode) {
      console.log(vnode)
      let arg = binding.arg || ''
      let pass = true
      if (permission[moduleName]) {
        let perKeys = Object.keys(pagePerAlias[arg] || {})
        for (let key of perKeys) {
          if (!permission[key]) {
            pass = false
            break
          }
        }
      } else {
        pass = false
      }
      if (!pass) {
        vnode.componentInstance && vnode.componentInstance.$destroy()
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  })

  Vue.prototype.registerPermissionAlias = (name, perMap) => {
    pagePerAlias = perMap || {}
    moduleName = name || ''
  }
}
