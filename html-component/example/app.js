import HC from '../src/index'


console.log('HtmlComponent', HC)

let app = document.getElementById('app')
let htmlStr = `
<div id="hello" vbind_value="1+1">
    测试
    <div class="hello">hello</div>
    <span>span</span>
    <img src="aaa" />
</div>
`
HC.render(htmlStr, app)


function Timer(time) {
    return `<h1 id="${time}"><span>jjj</span></h1>`
}

let i = 1
setInterval(() => {
    HC.render(Timer(i++), app)
}, 1000)