<permission>
{
    "edit": false
}
</permission>

<i18n>
{
    "zh": {
        "hello": "你好"
    },
    "en": {
        "hello": "hello"
    }
}
</i18n>

<template>
  <div>
      <div>{{$t('hello')}}</div>
      <button>编辑</button>
  </div>
</template>

<script>
export default {
    mounted() {
        window.about = this
    }
}
</script>

<style>

</style>