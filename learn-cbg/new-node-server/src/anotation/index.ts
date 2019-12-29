import * as GlobalConst from '../const/global'
// api层注解
export let Controller = (path?: string): any => {
	return function (target: any) {
		target.controller = path
	}
}

// service层注解
export let Service = (name: string): any => {
	return function (target: any) {
		target.service = name
	}
}

// service层注解
export let Dao = (name: string): any => {
	return function (target: any) {
		target.dao = name
	}
}


// Get请求
export let Get = (url: string) => {
	return function (target: any, name: any, descriptor: any) {
		descriptor.value.requestMethod = GlobalConst.RequestMethod.GET
		descriptor.value.requestUrl = url
	}
}

// POST请求
export let Post = (url: string) => {
	return function (target: any, name: any, descriptor: any) {
		descriptor.value.requestMethod = GlobalConst.RequestMethod.POST
		descriptor.value.requestUrl = url
	}
}

// 中间件
export let MiddleWare = (MiddleWareList: any) => {
	return function (target: any, name: any, descriptor: any) {
		descriptor.value.middleWare = MiddleWareList
	}
}

// 注入service、dao
export let Inject = (inject: any) => {
	return function (target: any) {
		target.inject = inject
	}
}