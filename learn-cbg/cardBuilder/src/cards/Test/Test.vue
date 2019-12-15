<template>
    <section class="uploadcard">
        <h1>jjjjkkkkkk</h1>
        <!-- <el-upload
            class="upload-demo"
            action="/api/card/upload"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传js文件</div>
        </el-upload>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="id" label="id" width="180"></el-table-column>
            <el-table-column prop="name" label="卡片名称"></el-table-column>
            <el-table-column prop="src" label="地址"></el-table-column>
            <el-table-column prop="create_date" label="创建日期" width="180"></el-table-column>
            <el-table-column prop="update_date" label="更新日期" width="180"></el-table-column>
        </el-table> -->
    </section>
</template>
<script>
// import { get } from '@/api/request'
export default {
    data() {
        return {
            fileList: [],
            tableData: []
        }
    },
    mounted() {
      this.getCardList()
    },
    methods: {
        getCardList() {
            // get('/api/card/list', {
            //     pageNum: 1,
            //     pageSize: 10
            // }).then((response) => {
            //     if (response.code === 0) {
            //         this.tableData = response.data.data
            //     }
            // })
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
        }
    }
}
</script>
<style>
.uploadcard {
  margin: 30px 50px;
}
</style>

