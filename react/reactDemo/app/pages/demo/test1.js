import React,{ Component } from "react";
/**
 * 生命周期
 * 
 */
class Child extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Message'
        }
    }
    // 在初始话组件时执行
    /**
        执行 componentWillMount
        执行 render
        Child执行 componentWillMount
        Child执行 render
        Child执行 componentDidMount
        执行 componentDidMount
        执行 componentWillReceiveProps
        执行 shouldComponentUpdate
     */
    componentWillMount(){
        console.log('Child执行 componentWillMount')
    }
    componentDidMount(){
        console.log('Child执行 componentDidMount')
    }
    render() {
        console.log('Child执行 render')
        return (<div style={{border: '1px solid red'}}>
                <button onClick={() => {this.changeTitle()}}>改变子组件的数据</button>
            <strong>{this.state.title}</strong>: <span>{this.props.msg}</span>
        </div>)
    }
    /**
     看父组件的注释
     */
    componentWillReceiveProps(nextProps) {
        console.log('Child执行 componentWillReceiveProps')
    }
    /**
     在初始化render时不会执行，当props或者state发生变化时执行。
     函数默认返回true，需要重新render。
     返回false，就不会重新render了。
     componentWillUpdate和componentDidUpdate方法也不会被调用。
     执行顺序： 
        Child执行 shouldComponentUpdate
        Child执行 componentWillUpdate
        Child执行 render
        Child执行 componentDidUpdate
     */
    shouldComponentUpdate() {
        console.log('Child执行 shouldComponentUpdate')
        return true
    }
    /**
     需要特别注意的是，在这个函数里面，不要用this.setState来修改状态。不然这个函数会无限循环执行。
     但是可以直接修改 nextProps， nextState对象
     */
    componentWillUpdate(nextProps, nextState) {
        console.log('nextProps', nextProps,'nextState',nextState)
        // nextState.title = 'uuu'
        console.log('Child执行 componentWillUpdate')
    }
    /**
     除了首次render之后调用componentDidMount，其它render结束之后都是调用componentDidUpdate。
     */
    componentDidUpdate() {
        console.log('Child执行 componentDidUpdate')
    }
    /**
     * 组件将要被销毁
     */
    componentWillUnmount() {
        console.log('Child执行 componentWillUnmount')
    }
    changeTitle() {
        this.setState({
            title: this.state.title==='消息'? 'Message':'消息'
        })
    }
};

export default class HelloReact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: '来自父级的信息'
        }
        this.myRef=React.createRef();
    }
    componentWillMount(){
        console.log('执行 componentWillMount')
    }
    componentDidMount(){
        console.log('执行 componentDidMount')
        console.log('child Component', this.myRef)
    }
    render() {
        console.log('执行 render')
        return (
            <div>
                <button>改变父组件传递给子组件的数据</button>
                <Child ref={this.myRef} msg={this.state.message}></Child>
            </div>
        )
    }
    // 在子组件接受父组件传递的props时执行只执行一次
    /**
     props是父组件传递给子组件的。
     父组件发生render的时候子组件就会调用componentWillReceiveProps。
     （不管props有没有更新，也不管父子组件之间有没有数据交换）
     执行顺序： componentWillMount -> render -> componentDidMount
     */
    componentWillReceiveProps(nextProps) {
        console.log('parent nextProps', nextProps)
        console.log('执行 componentWillReceiveProps')
    }
    shouldComponentUpdate() {
        console.log('执行 shouldComponentUpdate')
    }
    componentWillUpdate() {
        console.log('执行 componentWillUpdate')
    }
    componentDidUpdate(nextProps,nextState) {
        console.log('执行 componentDidUpdate')
    }
    componentWillUnmount() {
        console.log('执行 componentWillUnmount')
    }
    // 渲染时发生错误时执行
    componentDidCatch(error, info) {

    }
};