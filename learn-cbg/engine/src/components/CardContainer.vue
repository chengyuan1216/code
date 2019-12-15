<template>
    <section class="card-container">
      <component :is="cardName" v-if="cardName"></component>
    </section>
</template>
<script>

import loadScript from 'load-script'
export default {
    props: {
        card: {
            type: Object,
            default: () => {}
        }
    },
 
    mounted() {
        
    },

    created() {
        this.loadCard()
    },

    data() {
        return {
            cardName: null
        }
    },

    methods: {
        loadCard() {
            loadScript(this.card.src, (error, script) => {
                // 这里全局注册会不会有问题？
                // 有什么好的方案？
                // 其实全局注册也有个好处， 用于缓存
                this.cardName = this.card.name + (new Date().getTime())
                this.VueConstructor.component(this.cardName, window[this.card.name].default)
            })
            console.log('this.VueConstructor', this.VueConstructor.prototype)
        }
    }
}
</script>
<style lang="scss">
.card-container {
    border-radius: 2px;
    box-shadow: 0 0 4px 2px #CCC;
    padding: 30px;
    background: #fff;
}
</style>


