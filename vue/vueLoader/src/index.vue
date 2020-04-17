<permission>
{
    "router": ['index'],
    "source": {
        "add": "index_add"
    }
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
      <h1>Index</h1>
      <div>{{$t('hello')}}</div>
      <PermissionControl>
        <button>增加</button>
      </PermissionControl>
  </div>
</template>

<script>
import PermissionControl from './permissionControl.vue'
export default {
    components: {
        PermissionControl
    },
    mounted() {
        window.index = this
    }
}
</script>

<style>

</style>