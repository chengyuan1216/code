<template>
    <div>
        <!--  IF_TRUE_test  -->
        <!-- kkk -->
        console.log('test true');
        <!--   FI_TRUE_test  -->
        <!--  IF_FALSE_test  -->
        console.log('test false');
        <!--   FI_FALSE_test  -->
    </div>
</template>
<script>

export default {
    methods: {
    },
    onLaunch: async function () {

    },
    onError(err) {
        /* IF_TRUE_test */
        console.log('test true');
        /* FI_TRUE_test */

        /* IF_FALSE_test */
        console.log('test false');
        /* FI_FALSE_test */
        console.log('App.vue Error', err);
    }
};
</script>

<style>
    /* IF_TRUE_test */
    .test_true {
        font-size: 28rpx;
        color: #333;
    }
    /* FI_TRUE_test */

    /* IF_FALSE_test */
    .test_false {
        font-size: 28rpx;
        color: #333;
    }
    /* FI_FALSE_test */
</style>
