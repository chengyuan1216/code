<template>
  <div id="app">
    <header id="app-header">
      <AppHeader></AppHeader>
    </header>
    <main id="app-main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import AppHeader from './components/Header'
export default {
  name: 'app',
  components: { AppHeader },
  mounted() {
  	
  },
  methods:{

  }
}
</script>

<style lang="scss">
@import './scss/var.scss';
html, body {
  margin: 0;
  padding: 0;
  font-size: 14px;
  #app-header {
    padding: 0 80px;
    background-color: $color;
  }
  #app-main {
    margin: 0 100px;
  }
}
body {
  min-width: 900px;
}
</style>
