<template>
  <div class="example">{{ msg }}</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello vue22!'
    }
  }
}
</script>

<style lang="scss">
@import './style/index.scss';
.example {
  color: $color;
  font-size: 50px;
  text-decoration: underline;
}
</style>