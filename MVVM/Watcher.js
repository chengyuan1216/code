function Watcher(obj, key, callback) {
	if (Butterfly.compatible) {
		Dep.target = this
		var oldVal = obj[key]
		Dep.target = null
		this.update = function() {
			callback(obj[key], oldVal)
		}
	} else {
		// 将当前对象挂载到Dep.target
		Dep.target = this
		// dep对象会收集依赖
		var oldVal = obj[key].get()
		Dep.target = null
		this.update = function() {
			callback(obj[key].get(), oldVal)
		}
	}
}

Watcher.prototype.parsePath= function(obj, path) {
	if(/\./.test(path)){
		var pathList = path.split('.');
		var val = obj;
		while(pathList.length){
			val = val[pathList[0]];
			pathList.shift()
		}
		return val
	} else {
		return obj[path]
	}
};