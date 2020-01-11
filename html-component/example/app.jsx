import HiComponent from 'HiComponent'
import Home from './src/pages/home'
// console.log('HiComponent', HiComponent)

// TODo： 
// 支持事件
// 重构编译器
// 嵌套DOM有问题
document.getElementById('app').appendChild(
    <div define-dom="true">
        {/* <span>title</span>
        <Test></Test> */}
        {/* <Home></Home> */}
    </div>
)

debugger
const eventBus = new HiComponent.EventEmitter()

eventBus.on('render', data => {
    console.log('render', data)
})

eventBus.emit('render', 'jjjj')
