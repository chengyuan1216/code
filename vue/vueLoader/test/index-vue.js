import { render, staticRenderFns } from "./index.vue?vue&type=template&id=2964abc9&"
import script from "./index.vue?vue&type=script&lang=js&"
export * from "./index.vue?vue&type=script&lang=js&"


/* normalize component */
import normalizer from "!../node_modules/_vue-loader@15.9.1@vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */
import block0 from "./index.vue?vue&type=custom&index=0&blockType=permission"
if (typeof block0 === 'function') block0(component)
import block1 from "./index.vue?vue&type=custom&index=1&blockType=i18n"
if (typeof block1 === 'function') block1(component)

/* hot reload */
if (module.hot) {
  var api = require("E:\\github\\code\\vue\\vueLoader\\node_modules\\_vue-hot-reload-api@2.3.4@vue-hot-reload-api\\dist\\index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('2964abc9')) {
      api.createRecord('2964abc9', component.options)
    } else {
      api.reload('2964abc9', component.options)
    }
    module.hot.accept("./index.vue?vue&type=template&id=2964abc9&", function () {
      api.rerender('2964abc9', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "src/index.vue"
export default component.exports