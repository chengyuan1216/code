<template>
    <el-menu 
        class="app-menu"
        :default-active="$route.fullPath"  
        mode="horizontal"
        router
        background-color="#1e89e0" 
        @select="handleSelect">
        <el-menu-item :index="menu.path" v-for="menu in menuList" :key="menu.path">{{menu.name}}</el-menu-item>
    </el-menu>
</template>

<script>
export default {
    watch: {

    },
    data () {
        return {
            menuList: [
                {'path': '/', name: '首页'},
                {'path': '/uploadCard', name: '卡片上传'},
                {'path': '/test', name: '卡片测试'},
            ]
        }
    },
    mounted() {
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath)
        }
    }
}
</script>
<style lang="scss" scoped>
.app-menu {
    .el-menu--horizontal.el-menu {
        border-bottom: 0;
    }
    .el-menu-item {
        color: #fff;
    }
    .el-menu-item:hover {
        color: #fff !important;
        background-color: #167ad1 !important;
    }
    .is-active {
        border-bottom-color: #167ad1 !important;
        background-color: #167ad1 !important;
        color: #fff !important;
    }
}
</style>


