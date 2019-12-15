<template>
    <section class="page-header clear">
        <Menu style="float: left;"></Menu>
        <User style="float: right;"></User>
    </section>
</template>
<script>
import Menu from './Menu.vue'
import User from './User.vue'
export default {
    components: {
        Menu,
        User
    },
    data() {
        return {
 
        }
    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
.clear:after {
    display:block;
    content: '';
    clear: both;
}
.page-header {
    height: 60px;
    width: 100%;
}
</style>

