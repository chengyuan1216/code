import * as GlobalConst from '../const/global'
// service层注解
export let Service = (serviceName: any): any => {
	return function (target: any) {

	}
}

// api层注解
export let Controller = (serviceName: any) => {
	return function (target: any) {
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