function log(message) {
	var wrap = document.getElementById('test-print-log')
	if (wrap) {
		wrap.innerHTML += message +'<br/>'
	} else {
		wrap = document.createElement('div');
		wrap.id = 'test-print-log'
		wrap.style.cssText = 'position: fixed; bottom: 0; width: 100%; height: 300px; overflow: auto; background: #e0e0e0; color: red; font-size: 16px;'
		wrap.innerHTML += message +'<br/>'
		document.body.appendChild(wrap)
	}
}


function EventListener(el, type, callback) {
	var handle = function(e) {
		e = e || window.event
		e.element = e.target || e.srcElement
		callback(e)
	}
	try {
		el.addEventListener(type, callback, false);
	} catch(e) {
		el.attachEvent('on'+type, callback);
	}
}