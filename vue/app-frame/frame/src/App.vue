<template>
  <div id="app">
    <div id="nav">
      <router-link to="/m-a">a</router-link> |
      <router-link to="/m-b">b</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
const app = {
  projectA: {
    vendors: `http://localhost:8086/a/js/chunk-vendors.js`,
    app: `http://localhost:8086/a/js/app.js`,
    css: `http://localhost:8086/a/css/app.css`
  },
  projectB: {
    vendors: `http://localhost:8087/b/js/chunk-vendors.js`,
    app: `http://localhost:8087/b/js/app.js`,
    css: `http://localhost:8087/b/css/app.css`
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

export default {
  
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
