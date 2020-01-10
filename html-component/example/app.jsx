import HC from '../src/index'
function App() {
    let props = {
        title: 'hello'
    }
    let list = new Array(1000).join('1').split('')
    return (
        <div>
            {list.map((_, index) => Child({index: index}))}
            <Child title=""></Child>
        </div>
    )
}   

function Child(props) {
    return (
        <div class="child">
            <h1>{props.index}</h1>
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

// function Test(props) {
//     return (
//         <div>{props.title}</div>
//     )
// }
HC.render(App(), 'app')
