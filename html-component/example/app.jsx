import HiComponent from '../lib/HiComponent.js'
import Home from './src/pages/home'
console.log('HiComponent', HiComponent)


function Child(title = '') {
    return (
        <div class="child">
            <h1 style="color: red">{title}</h1>
            <form class="navbar-form" role="search">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Search"></input>
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
            </form>
            <nav aria-label="Page navigation">
            <ul class="pagination">
                <li>
                <a href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
                </li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li>
                <a href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
                </li>
            </ul>
            </nav>
        </div>
    )
}

function App() {
    let childData = '这是一段标题'
    let list = new Array(1000).join('1').split('')
    return (
        <div>
            {list.map((_, index) => Child(index))}
        </div>
    )
}  

console.time('test')
let Context = new HiComponent()
Context.render(App(), '#app')
console.timeEnd('test')

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
