import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import loadScript from 'load-script';
// import 'systemjs/dist/system.js'

console.log(System)

const app = {
  projectA: {
    vendors: `/a/js/chunk-vendors.js`,
    app: `/a/js/app.js`,
    css: `http://localhost:8086/a/css/app.css`
  },
  projectB: {
    vendors: `/b/js/chunk-vendors.js`,
    app: `/b/js/app.js`,
    css: `/b/css/app.css`
  }
}

function loadComponent(componentName) {
  return function (resolve, reject) {
    let appSource = app[componentName]
    // System.import(appSource.vendors).then(() => {
    //   System.import(appSource.app).then(() => {
    //     console.log(window[componentName])
    //     resolve(window[componentName].default.component())
    //     window[componentName] = true
    //   })
    // })
    loadScript(appSource.vendors, () => {
      loadScript(appSource.app, () => {
        console.log(window[componentName])
        resolve(window[componentName].default.component())
        window[componentName] = true
      })
    })
    loadCss(appSource.css)
  }
}

// loadComponent('projectA')()

function loadCss(URL) {
  var oHead = document.getElementsByTagName('HEAD').item(0)
  var addheadfile
  addheadfile = document.createElement("link")
  addheadfile.type = "text/css"
  addheadfile.rel = "stylesheet"
  addheadfile.rev = "stylesheet"
  addheadfile.media = "screen"
  addheadfile.href = URL
  oHead.appendChild(addheadfile)
}

Vue.use(VueRouter);

const routes = [
  {
    path: "/m-a",
    name: "a",
    component: loadComponent('projectA')
  },
  {
    path: "/m-b",
    name: "b",
    component: loadComponent('projectB')
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
