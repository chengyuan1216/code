<template>
  <el-checkbox-group v-model="checkList">
    <el-checkbox :label="12"></el-checkbox>
    <el-checkbox :label="13"></el-checkbox>
    <el-checkbox :label="14"></el-checkbox>
  </el-checkbox-group>
</template>

<script>
  export default {
    props: {
        value: {
            type: Array,
            default: []
        }
    },
    model: {
        event: 'change',
        prop: 'value'
    },
    watch: {
        value: {
            handler(n) {
                console.log('value 改变了', n)
                // if (JSON.stringify(n.map(item => item + 10)) !== JSON.stringify(this.checkList)) {
                //     this.checkList = n.map(item => item + 10)
                // }
                this.checkList.lenth = 0
                for (let i = 0; i < n.length; i++) {
                    this.checkList.push(n[i] + 10)
                }
            },
            immediate: true
        },
        checkList(n) {
            console.log('checkList 改变了', n)
            //if (JSON.stringify(n.map(item => item - 10)) !== JSON.stringify(this.value)) {
                this.$emit('change', n.map(item => item - 10))
           // }
        }
    },
    data () {
      return {
        oldVlue: [],
        checkList: []
      };
    },
    mounted() {
        console.log('Test', this)
    }
  }
</script>

