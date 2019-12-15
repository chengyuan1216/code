function ObserverIE(data) {
	console.log("ObserverIE")
	this.defs(data)
}

ObserverIE.prototype.def = function(data, key) {
	//用于收集依赖
	var dep = new Dep()
	var afterVal = {}

	afterVal[key] = data[key]
	afterVal.get = function get() {
		if (Dep.target) {
 			dep.addDepend(Dep.target)
 		}
		return this[key]
	}
	afterVal.set = function set(newVal) {
		if (newVal !== this[key]) {
			this[key] = newVal
			dep.notify()
		}
	}

	data[key] = afterVal
}

ObserverIE.prototype.defs = function(data) {
	var _this = this
	for (var key in data) {
		if (Object.prototype.toString.call(data[key]) === '[object Object]') {
			_this.defs(data[key])
		}
		_this.def(data, key)
	}
}
