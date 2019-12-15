import React,{ Component } from "react";
import ReactDOM from "react-dom";
import {hashHistory} from 'react-router'
/**
 * 事件
 * 
 */
function Hello(props) {
    console.log(props)
    return <h1 onClick={props.click}>{props.message}</h1>
}
class Tick extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'hello 你好'
        }
    }
    componentDidMount() {
        this.timer = setInterval(this.tick.bind(this), 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        console.log('render', this.state)
        const root = <div id="tick">hello</div>
        console.log(root, 'root')
        return root 
    }
    tick() {
        // console.log('tick', this)
        const element = (
            <div>
                <Hello message={this.state.message} click={this.helloClick.bind(this)}></Hello>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
        ReactDOM.render(element, document.getElementById('tick'));
    }
    helloClick() {
        alert('hello')
    }
}

/**
 * 表单
 */
class inputForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '受控组件',
            textareaValue: '文本域',
            selectValue: 'css',
            checkboxValue: true
        }
    }
    handleChange(e) {
        console.log(e.target.value, e.target.checked)
        let value = e.target.type === 'checkbox'? e.target.checked: e.target.value
        this.setState({
            [e.target.name]: value
        })
    }
    handleInput(e) {
        console.log('input', e.target.value)
    }
    render() {
        return (
            <div>
                {/*受控组件*/}
                <input value={this.state.inputValue} name="inputValue" onChange={this.handleChange.bind(this)} />
                <input value="受控组件 不可编辑" />
                {/*不受控组件*/}
                <input 
                    defaultValue="不受控组件" 
                    ref={(input) => this.input = input} 
                    onInput={this.handleInput.bind(this)}/>
                <input name="checkboxValue" type="checkbox" checked={this.state.checkboxValue} onChange={this.handleChange.bind(this)} />
                <textarea value={this.state.textareaValue} ></textarea>
                <select value={this.state.selectValue} name="selectValue" onChange={this.handleChange.bind(this)}>
                    <option value="html">html</option>
                    <option value="css">css</option>
                    <option value="javascript">javascript</option>
                </select>
            </div>
        )
    }
}

/**
 * 状态提升
 * 
 */

 /**
  * 包含关系
  * 相当于vue里面的slot
  */
function ParentBorder(props) {
    console.log(props, 'props')
    let children = props.children
    children[children.length - 1] = children[children.length - 1]()
    return (
        <div style={{border: props.borderStyle}}>
            {props.top}
            {children}
        </div>
    )
}
class UseBorder extends Component {
    constructor(props) {
        super(props)
        this.changeRoute = this.changeRoute.bind(this)
    }
    changeRoute() {
        // 路由跳转
        // hashHistory.push('/demo/test1')
        hashHistory.replace('/demo/test1')
    }
    render() {
        const topComponent = (
            <h1>这是标题</h1>
        );
        return (
            <ParentBorder borderStyle="10px solid #e0e0e0" top={topComponent} >
                <button onClick={this.changeRoute}>跳转路由</button>
                <div>hello liuchengyuan!!!</div>
                <div>hello react!!!</div>
                {/* 这里可以传递一个方法 */}
                {() => (<div>这里是动态返回</div>)}
            </ParentBorder>
        )
    }
}
export default UseBorder