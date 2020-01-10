import HC from '../src/index'

let htmlStr = (
    <div id="hello" value="1+1">
        测试
        <div class="hello">hello</div>
        <span>span</span>
        <img src="aaa" />
    </div>
)
// HC.render(htmlStr, 'app')

function Child(item) {
    return <span>{item}</span>  
}
function Timer(time) {
    return (
        <div id="h1" class="{time}">
            <div>{time}</div>
            <span>{new Date().toLocaleString()}</span>
            <div>
                {}
            </div>
        </div>
    )
}

let i = 1
HC.render(Timer(i++), 'app')
setInterval(() => {
    HC.render(Timer(i++), 'app')
}, 1000)

// let j = 100
// setInterval(() => {
//     HC.render(Timer(j++), 'app1')
// }, 1000)
