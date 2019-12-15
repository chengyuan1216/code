<template>
    <section class="user">
        <div class="nologin" v-if="!user">
            <a @click="showDialog('login')">登陆</a><span class="divider">|</span><a @click="showDialog('register')">注册</a>
        </div>
        <div v-else>
            <el-dropdown>
                <span class="dropdown-link">
                    {{user.name}}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <el-dialog
            :title="type === 'login'? '登陆': '注册'"
            :visible.sync="isShowDialog"
            append-to-body
            width="400px">
            <el-form ref="form" :model="form"  :rules="rules" label-width="80px">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="form.password" type="password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="password2" v-if="type === 'register'">
                    <el-input v-model="form.password2" type="password"></el-input>
                </el-form-item>
            </el-form>    
            <div slot="footer" style="text-align: center">
                <el-button @click="closeDialog">取 消</el-button>
                <el-button type="primary" @click="submitForm('form')">确 定</el-button>
            </div>
        </el-dialog>
    </section>
</template>
<script>
import { post, url } from '@/api/request'
import { mapMutations, mapState } from 'vuex'
export default {
    data() {
        return {
            isShowDialog: false,
            type: null,
            form: {
                name: null,
                password: null,
                password2: null
            },
            rules: {
                name: [
                    { required: true, message: '用户名不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ],
                password2: [
                    { required: true, message: '请确认密码', trigger: 'blur' }
                ]
            } 
        }
    },

    computed: {
        ...mapState(['user'])
    },

    methods: {
        ...mapMutations(['setUser']),

        showDialog(type) {
            this.type = type
            this.isShowDialog = true
        },

        closeDialog() {
            this.isShowDialog = false
            this.resetForm('form')
        },

        register() {
            if (this.form.password !== this.form.password2) {
                this.$message({
                    type: 'error',
                    message: '两次输入的密码不一致'
                })
            } else {
                post(url.user.register, {
                    name: this.form.name,
                    password: this.form.password
                }).then((response) => {
                    console.log(response)
                    if (response.code === 0) {
                        this.$message({
                            type: 'success',
                            message: response.data.message
                        })
                        this.isShowDialog = false
                    }
                })
            }
        },

        login() {
            post(url.user.login, {
                name: this.form.name,
                password: this.form.password
            }).then((response) => {
                if (response.code === 0) {
                    this.$message({
                        type: 'success',
                        message: response.data.message
                    })
                    this.isShowDialog = false
                    console.log('user', response.data)
                    this.setUser(response.data.user)
                }
            })
        },

        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    if (this.type === 'register') {
                        this.register()
                    } else if (this.type === 'login') {
                        this.login()
                    }
                }
            })
        },

        resetForm(formName) {
            this.$refs[formName].resetFields();
        },

        handleSelect(key, keyPath) {
            console.log(key, keyPath)
        }
    }
}
</script>
<style lang="scss" scoped>
.user {
    
    height: 60px;
    line-height: 60px;
    color: #fff;
    .nologin {
        .divider {
            margin: 0 10px;
        }
        a {
            font-weight: normal;
            cursor: pointer;
        }
        a:hover {
            text-decoration: underline;
            color: #eee;
        }
    }
    .dropdown-link {
        color: #fff;
    }
}
</style>

