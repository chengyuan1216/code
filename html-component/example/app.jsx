import HC from '../src/index'


console.log('HtmlComponent', HC)


// let htmlStr = (
//     <div id="hello" value="1+1">
//         测试
//         <div class="hello">hello</div>
//         <span>span</span>
//         <img src="aaa" />
//     </div>
// )

// HC.render(htmlStr, 'app')


function Timer(time) {
    return <h1 id="time"><span>jjj</span></h1>
}

let i = 1
setInterval(() => {
    HC.render(Timer(i++), 'app')
}, 1000)

let j = 100
setInterval(() => {
    HC.render(Timer(j++), 'app1')
}, 1000)

// let a = <div class="hello">gg<span>123</span></div>