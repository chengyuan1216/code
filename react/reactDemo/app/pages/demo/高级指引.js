import React,{ Component } from "react";
import ReactDOM from "react-dom";
/**
1、深入jsx
(1)本质上来讲，JSX 只是为 React.createElement(component, props, ...children) 方法提供的语法糖。
(2)设置样式class对应的属性为className
(3)大写开头的 JSX 标签表示一个 React 组件。这些标签将会被编译为同名变量并被引用，所以如果你使用了 <Foo /> 表达式，则必须在作用域中先声明 Foo 变量。
(4)由于 JSX 编译后会调用 React.createElement 方法，所以在你的 JSX 代码中必须首先声明 React 变量。
(5)点表示法。可以方便地从一个模块中导出许多 React 组件
(6)当元素类型以小写字母开头时，它表示一个内置的组件，如 <div> 或 <span>。建议用大写开头命名组件。
(7)如果你没有给属性传值，它默认为 true。
(8)扩展属性。
    function App1() {
        return <Greeting firstName="Ben" lastName="Hector" />;
    }
    function App2() {
        const props = {firstName: 'Ben', lastName: 'Hector'};
        return <Greeting {...props} />;
    }
(9) 子代。
在包含开始和结束标签的 JSX 表达式中，标记之间的内容作为特殊的参数传递：props.children。
    <MyComponent>Hello world!</MyComponent>

    <MyContainer>
        <MyFirstComponent />
        <MySecondComponent />
    </MyContainer>
(10)布尔值、Null 和 Undefined 被忽略
false、null、undefined 和 true 都是有效的子代，但它们不会直接被渲染。
如果你想让类似 false、true、null 或 undefined 出现在输出中，你必须先把它转换成字符串
*/

/**
2、使用 PropTypes 进行类型检查
React有一些内置的类型检查功能。要检查组件的属性，你需要配置特殊的 propTypes 属性


 */
function Hello(props) {
    console.log(props)
    return <h1 onClick={props.click}>{props.message}</h1>
}
export default UseBorder