<script>
export default {
    data() {
        return {
            perParent: null,
        }
    },
    props:{

    },
    render(h) {
        this.getPerParent()
        return this.$slots.default
    },
    methods: {
        getPerParent() {
            if (!this.perParent) {
                let parent = this.$parent
                while(parent) {
                    if (parent.$options.__permission) {
                        this.perParent = parent
                        break
                    }
                    parent = parent.$parent
                }
            }
            
            console.log('this.perParent', this.perParent)
        }
    },
    beforeDestroy() {
        this.perParent = null
    }
}
</script>
