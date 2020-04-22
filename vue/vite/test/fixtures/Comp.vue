<template>
  <div>
    <button @click="count++">{{ count }}</button>
    <button @click="count++">{{ count }}</button>
    <button @click="count++">{{ count }}</button>
    <Child/>
  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  components: { Child },
  setup() {
    return {
      count: 0
    }
  }
}
</script>

<style lang="scss">
  button {
    margin-right: 10px;
  }
</style>
