import axios from 'axios'
import Vue from 'vue'
//axios.defaults.baseURL = 'http://localhost:8888' 
// xios.defaults.headers.common['Authorization'] = 'my_token'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.timout = 10000

// 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
    return config
  }, function (error) {
    return Promise.reject(error)
})

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
    console.log('接口${config.url}返回数据 ==>', response, response.data)
    if (response.data.code !== 0) {
        Vue.prototype.$message({
            type: 'error',
            message: response.data.data.message
        })
    }
    return response.data || {}
  }, function (error) {
    return Promise.reject(error)
})

export function get(url, params) {
    return axios.get(url, {
        params: params
    })
}

export function post(url, params) {
    return axios.post(url, params)
}

export let url = {
    card: {
        
    },
    user: {
        register: '/api/user/register',
        login: '/api/user/login'
    }
}
