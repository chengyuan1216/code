import HiComponent from '../lib/HiComponent.js'
const {dom, Fragment} = HiComponent

// function Child(props) {
//     return (
//         <div class="child">
//             <h1 style="color: red">{props.title}</h1>
//             <form class="navbar-form" role="search">
//                 <div class="form-group">
//                     <input type="text" class="form-control" placeholder="Search"></input>
//                 </div>
//                 <button type="submit" class="btn btn-default">Submit</button>
//             </form>
//             <nav aria-label="Page navigation">
//             <ul class="pagination">
//                 <li>
//                 <a href="#" aria-label="Previous">
//                     <span aria-hidden="true">&laquo;</span>
//                 </a>
//                 </li>
//                 <li><a href="#">1</a></li>
//                 <li><a href="#">2</a></li>
//                 <li><a href="#">3</a></li>
//                 <li><a href="#">4</a></li>
//                 <li><a href="#">5</a></li>
//                 <li>
//                 <a href="#" aria-label="Next">
//                     <span aria-hidden="true">&raquo;</span>
//                 </a>
//                 </li>
//             </ul>
//             </nav>
//         </div>
//     )
// }

function handleClick(data) {
    console.log('click', data)
}
function Text(props) {
    let list = new Array(10000).join('1').split('')
    let child = list.map((_, index) =><div class="Text" onClick={() => {handleClick(props.index)}}>{props.text}</div>)
    return (
        child
    )
}
function App() {
    let childData = '这是一段标题'
    let list = new Array(2).join('1').split('')
    let child = list.map((_, index) => (<Text index={index} text={"hello --> " + index}></Text>))
    debugger
    return (
        <div class="App">
            {/* <Text  text={"hello --> " + 1}  index={1}></Text> */}
            {child}
        </div>
    )
}  

console.time('test')
let Context = new HiComponent()
// console.log('App()[0]', App())
let app = App()
debugger
Context.render(app, '#app')
// document.getElementById('app').innerHTML = App()

// TODo： 
// 支持事件
// 重构编译器????
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
