import HiComponent from '../lib/HiComponent.js'
import Home from './src/pages/home'
console.log('HiComponent', HiComponent)

window.App = new HiComponent()
App.render((
    <div>jjjj</div>
), '#app')

// TODo： 
// 支持事件
// 重构编译器
// 嵌套DOM有问题
// document.getElementById('app').appendChild(
//     <div define-dom="true">
//         {/* <span>title</span>
//         <Test></Test> */}
//         {/* <Home></Home> */}
//     </div>
// )

// const eventBus = new HiComponent.EventEmitter()

// eventBus.on('render', data => {
//     console.log('render', data)
// })

// eventBus.emit('render', 'jjjj')
