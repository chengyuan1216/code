<template>
  <div id="app">
    <h1>
      <router-link to="/"><button>Home</button></router-link>
      <router-link to="/about"><button>About</button></router-link>
    </h1>
    <button @click="handle">{{count}}</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    handle() {
      this.count++
    }
  }
}
</script>

<style>

</style>