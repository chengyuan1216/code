<template>
    <section>
        <h1>首页111s</h1>
        <image :src="logo" />
        <Test v-model="a"></Test>
    </section>
</template>
<script>
// 将echarts打包进vendor包，如果单独打个包可以将vendors改成echarts
// const echarts = () => import(/* webpackChunkName: "vendors" */ 'echarts')

import logo from '../images/logo.svg'
import Test from '../components/Test'
export default {
    components: { Test },

    data() {
        return {
            a: [3]
        }
    },
    computed: {
        logo() {
            return logo
        }
    },
    watch: {
        a(n){
            console.log(n)
        }
    },
    methods: {

    }
}
</script>
<style>

</style>

