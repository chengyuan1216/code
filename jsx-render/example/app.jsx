import dom, { Fragment } from 'dom/dom.js'
import { withState } from 'dom/reduxish.js'
import { createStore, combineReducers } from 'redux'

// function counter(state = 0, action) {
//   switch (action.type) {
//     case 'INC':
//       return state + 1
//     case 'DEC':
//       return state - 1
//     default:
//       return state
//   }
// }

// const rootReducer = combineReducers({
//   counter,
//   changos(state = false) { return state },
//   user(state = null, action) {
//     if (action.type === 'USER') {
//       return action.payload[0]
//     }
//     return state
//   }
// })

// const store = createStore(rootReducer, {
//   counter: 0,
//   changos: true,
// })


// const actions = {
//   increment: el => el.addEventListener('click', () => store.dispatch({ type: 'INC' })),
//   equality: el => el.addEventListener('click', () => console.log('bla', store.getState())),
//   decrement: el => el.addEventListener('click', () => store.dispatch({ type: 'DEC' })),
//   fetch: el => el.addEventListener('click', () => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(json => {
//         store.dispatch({ type: 'USER', payload: json })
//       })
//   }),
// }

// function Headline(props) {
//   const state = store.getState()
//   return (
//     <div>
//       <span>
//         <h1>{state.counter}</h1>
//       </span>
//       <button ref={actions.increment}>
//         Increase ++{state.counter === 4 ? ' Why so serious!' : '!'}
//       </button>
//       <button style={{ background: props.bg }} ref={actions.equality}>
//         Click Me! {props.width}
//       </button>
//       <button ref={actions.decrement}>
//         Dec --!
//       </button>
//       <button ref={actions.fetch}>
//         getUser
//       </button>
//       <div>
//         {state.user && (
//           Object.keys(state.user).map(item => <li>{state.user[item]}</li>)
//         )}
//       </div>
//     </div>
//   )
// }
// let head = withState(Headline, store)
// const app = document.querySelector('#app')

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
app.appendChild(App())
console.timeEnd('test')
