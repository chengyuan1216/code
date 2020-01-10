import HC from '../src/index'

let htmlStr = (
    <div id="hello" value="1+1">
        测试
        <div class="hello">hello</div>
        <span>span</span>
        <img src="aaa" />
    </div>
)
HC.render(htmlStr, 'app')


function Timer(time) {
    return (
        <h1 class="timer">
            <span>{time}</span>
        </h1>
    )
}

let i = 1
setInterval(() => {
    HC.render(Timer(i++), 'app')
}, 1000)

let j = 100
setInterval(() => {
    HC.render(Timer(j++), 'app1')
}, 1000)
