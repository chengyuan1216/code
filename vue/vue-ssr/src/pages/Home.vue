<template>
  <div>
    <h1>Home</h1>
    <pre>
      {{JSON.stringify(item)}}
    </pre>
  </div>
</template>

<script>
export default {
  // 在服务端渲染时通过asyncData来获取异步数据
  // 在纯客户端渲染并不会执行 asyncData
  asyncData ({ store, route }) {
    console.log('asyncData')
    // 触发 action 后，会返回 Promise
    return store.dispatch('fetchItem', 1)
  },
  computed: {
    // 从 store 的 state 对象中的获取 item。
    item () {
      return this.$store.state.items[1]
    }
  }
}
</script>

<style>

</style>