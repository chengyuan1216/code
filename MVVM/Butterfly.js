function Butterfly (options) {
	this.init()
	this.$observer(this.$data)
	this.proxyData()
	this.$compile(this, this.$options.el)
}

//初始化
Butterfly.prototype.init = function() {
	this.$options = options || {}
	this.$data = this.$options.data
}

//代理数据
Butterfly.prototype.proxyData = function() {
	var _this = this

	if (Butterfly.compatible) {
		var keys = Object.keys(this.$data)
		for(var i=0, l=keys.length; i<l; i++) {
			proxy(i)
		}
	} else {
		for(var key in this.$data){
			proxyIE(key)
		}
	}

	function proxy(i) {
		Object.defineProperty(_this, keys[i], {
			configurable: true,
			enumerable: true,
			set: function(now){
				if (now !== _this.$data[keys[i]]) {
					_this.$data[keys[i]] = now
				}
			},
			get: function(){  
				return _this.$data[keys[i]]
			}
		})
	}

	function proxyIE(key) {
		var afterVal = {}

		afterVal.get = function get() {
			return _this.$data[key].get()
		}

		afterVal.set = function set(newVal) {
			if (newVal !== _this[key].get()) {
				_this.$data[key].set(newVal)
			}
		}

		_this[key] = afterVal
	}
}

//将options.data变成响应式数据
Butterfly.prototype.$observer = function(data) {
	//如果浏览器支持defineProperty
	if (Butterfly.compatible) {
		new Observer(data)
	} else {
		new ObserverIE(data)
	}
}

//编译模板
Butterfly.prototype.$compile = function(vm, rootElement) {
	new Compile(rootElement || document.body, vm)
}

//监测数据的变化
Butterfly.prototype.$watch = function(key, callback) {
	new Watcher(this, key, callback)
}

//设置数据
Butterfly.prototype.set = function() {

}

//获取数据
Butterfly.prototype.get = function() {

}

//设置为true时表示兼容defineProperty, 如果是低版本的IE请设置为false
Butterfly.compatible = false