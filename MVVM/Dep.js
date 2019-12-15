function Dep() {
	this.subs = []

}
//收集依赖
Dep.prototype.addDepend = function(target) {
	this.subs.push(target)
}
Dep.prototype.notify = function() {
	console.log("subs数量", this.subs.length)
	for(var i=0,l=this.subs.length; i<l; i++){
		this.subs[i].update()
	}
}
Dep.target = null