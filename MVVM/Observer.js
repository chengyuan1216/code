function Observer(data) {
	this.defs(data)
}

//这里函数内部不直接用data[key]原因是避免循环赋值，栈溢出
//这里之所以没有出现循环赋值， 是因为将data所有的属性转成访问器属性时所依赖的是闭包里的值
Observer.prototype.def = function(data, key, val) {
	//用于收集依赖
	var dep = new Dep()
	Object.defineProperty(data, key, {
		configurable: true,
		enumerable: true,
		set: function(now){
			if (now !== val) {
				val = now
				dep.notify()
			}
		},
		get: function(){  
			
			if (Dep.target) {
				dep.addDepend(Dep.target)
			}
			return val
		}
	})
}

Observer.prototype.defs = function(data) {
	var _this = this
	Object.keys(data).forEach(function(key){
		_this.def(data, key, data[key])
		if (Object.prototype.toString.call(data[key]) === '[object Object]') {
			_this.defs(data[key])
		}
	})
}





