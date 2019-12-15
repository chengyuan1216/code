interface IContext {
	init: (app: any) => void
}

interface Store {
	api: Object,
	service: Object,
	dao: Object,
}

interface StoreMap {
	[key: string]: typeof Function
}
