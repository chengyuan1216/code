function Compile(el, vm) {
    this.$vm = vm
    this.$el = this.isElementNode(el) ? el : document.querySelector(el)
    this.$el && this.init()
}

Compile.prototype = {
    //初始化。
    //1、先将DOM中的元素复制到文档碎片中。
    //2、编译模板。
    //3、将编译好的文当碎片内容插入到DOM中。
    init: function() {
        this.$fragment = this.node2Fragment(this.$el)
        this.compileFragment(this.$fragment)
        this.$el.appendChild(this.$fragment)
    },

    //将挂载的DOM节点转移到文档碎片中
    node2Fragment: function(el) {
        var fragment = document.createDocumentFragment(),
            wrap = document.createElement('div')
        wrap.innerHTML = this.$el.innerHTML
        this.$el.innerHTML = ''

        while(wrap.childNodes.length) {
            fragment.appendChild(wrap.childNodes[0])
        }

        return fragment
    },

    //编译文档碎片
    compileFragment: function(el) {
        var childNodes = el.childNodes,
            _this = this
            
        for (var i=0; i<childNodes.length; i++) {
            var node = childNodes[i]
            var reg = /\{\{(.*)\}\}/
            //var reg = /\{\{(.+?)\}\}/g;

            // 如果是元素节点
            if (_this.isElementNode(node)) {
                _this.compile(node)
            //如果是文本节点
            } else if(_this.isTextNode(node)) {
                if (reg.test(node.nodeValue)) {
                    _this.compileText(node, RegExp.$1)
                }
            }
            //如果node有子节点，将递归
            if (node.childNodes && node.childNodes.length) {
                _this.compileFragment(node)
            }
        }
    },

    //处理元素节点
    compile: function(node) {
        var nodeAttrs = node.attributes,
            _this = this

        for (var i=0; i<nodeAttrs.length; i++) {
            var attr = nodeAttrs[i]
            var attrName = attr.name

            //如果是自定义指令
            if (_this.isDirective(attrName)) {
                var exp = attr.value
                var dir = attrName.substring(2)

                // 事件指令
                if (_this.isEventDirective(dir)) {
                    Compile.compileUtil.eventHandler(node, _this.$vm, exp, dir)

                // 普通指令
                } else {
                    Compile.compileUtil['_' + dir] && Compile.compileUtil['_' + dir](node, _this.$vm, exp)
                }

                node.removeAttribute(attrName)
            }
        }
    },

    //处理文本节点
    compileText: function(node, exp) {
        Compile.compileUtil._text(node, this.$vm, exp)
    },

    //判断元素的属性是否是指令
    isDirective: function(attr) {
        return attr.indexOf('v-') == 0 || attr.indexOf('@') == 0
    },

    //判断是否是事件指令
    isEventDirective: function(dir) {
        //return dir.indexOf('on') === 0
        return dir.indexOf('on:') == 0 || dir.indexOf('@') == 0
    },

    //判断是否是元素节点
    isElementNode: function(node) {
        return node.nodeType == 1
    },

    //判断是否是文本节点
    isTextNode: function(node) {
        return node.nodeType == 3
    }
};

// 指令处理集合
Compile.compileUtil = {
    _text: function(node, vm, exp) {
        this.bind(node, vm, exp, 'text')
    },

    _html: function(node, vm, exp) {
        this.bind(node, vm, exp, 'html')
    },

    _model: function(node, vm, exp) {
        this.bind(node, vm, exp, 'model')

        var _this = this,
            val = this._getVMVal(vm, exp)

        if ('oninput' in node) {
            EventListener(node, 'input', handle)
        } else if ('onkeyup' in node) {
            EventListener(node, 'keyup', handle)
        }

        function handle(e) {
            var target = e.target || e.srcElement
            var newValue = target.value
            if (val === newValue) {
                return
            }
            _this._setVMVal(vm, exp, newValue)
            val = newValue
        }
    },

    //IE7、8不能以class作为属性名称
    _class: function(node, vm, exp) {
        this.bind(node, vm, exp, 'class')
    },

    bind: function(node, vm, exp, dir) {
        var updaterFn = Compile.updater[dir + 'Updater']
        // 将{{}}中的变量替换成具体的值
        updaterFn && updaterFn(node, this._getVMVal(vm, exp))
        // 将当前的key加入依赖
        new Watcher(vm, exp, function(value, oldValue) {
            updaterFn && updaterFn(node, value, oldValue)
        });
    },

    // 事件处理
    eventHandler: function(node, vm, exp, dir) {
        var eventType = dir.slice(3),
            fn = vm.$options.methods && vm.$options.methods[exp]

        if (eventType && fn) {
            EventListener(node, eventType, function(e){
                fn.call(vm, e)
            })
        }
    },

    _getVMVal: function(vm, exp) {
        var val = vm;
        exp = exp.split('.');
        for (var i=0; i<exp.length; i++) {
            val = this._get(val, exp[i])
        }
        return val
    },

    _setVMVal: function(vm, exp, value) {
        var val = vm;
        exp = exp.split('.')
        for (var i=0; i<exp.length; i++) {
            // 非最后一个key，更新val的值
            if (i < exp.length - 1) {
                val = this._get(val, exp[i])
            } else {
                this._set(val, exp[i], value)
            }
        }
    },

    //获取model数据
    _get: function(obj, key) {
        if (Butterfly.compatible) {
            return obj[key]
        } else {
            return obj[key].get()
        }
    },

    //设置model数据
    _set: function(obj, key, value) {
        if (Butterfly.compatible) {
            obj[key] = value
        } else {
            obj[key].set(value)
        }
    }
};


Compile.updater = {
    textUpdater: function(node, value) {
        node.nodeValue = typeof value == 'undefined' ? '' : value
    },

    htmlUpdater: function(node, value) {
        node.innerHTML = typeof value == 'undefined' ? '' : value
    },

    classUpdater: function(node, value, oldValue) {
        var className = node.className;
        className = className.replace(oldValue, '').replace(/\s$/, '')

        var space = className && String(value) ? ' ' : ''

        node.className = className + space + value;
    },

    modelUpdater: function(node, value, oldValue) {
        node.value = typeof value == 'undefined' ? '' : value
    }
}
