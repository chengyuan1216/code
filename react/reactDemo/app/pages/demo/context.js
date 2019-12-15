import React,{ Component } from "react";
import ReactDOM from "react-dom";

// 默认值
const defaultValue = {
  header: 'hello',
  body: 'body',
  footer: 'footer'
}

// 创建context
const MyContext = React.createContext(defaultValue)


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      header: 'hello',
      body: 'body',
      footer: 'footer'
    }
  }

  render() {
    return (
      <MyContext.Provider value={{
        header: 'hello',
        body: 'body',
        footer: 'footer'
      }}>
        <AppHeader></AppHeader>
        {/* <AppBody></AppBody>
        <AppFooter></AppFooter> */}
      </MyContext.Provider>
    )
  }
}



class AppHeader extends React.Component {
  render() {
    let context = this.context;
    console.log(context, 'context')
    return <header>{context.header}ppp</header>
  }
}
AppHeader.contextType = MyContext;

// class AppBody extends React.Component {
//   render() {
//     let context = this.context;
//     return <header>{context.body}</header>
//   }
// }
// AppBody.contextType = MyContext;

// class AppFooter extends React.Component {
//   render() {
//     let context = this.context;
//     return <header>{context.footer}</header>
//   }
// }
// AppFooter.contextType = MyContext;




// const themes = {
//     light: {
//       foreground: '#ffffff',
//       background: '#222222',
//     },
//     dark: {
//       foreground: '#000000',
//       background: '#eeeeee',
//     },
// };

// const ThemeContext = React.createContext(
//     themes.dark // 默认值
// );

// function ThemedButton(props) {
//     return (
//       <ThemeContext.Consumer>
//         {theme => (
//           <button
//             {...props}
//             style={{backgroundColor: theme.background}}
//           />
  
//         )}
//       </ThemeContext.Consumer>
//     );
// }

// // 一个使用到ThemedButton组件的中间组件
// function Toolbar(props) {
//     return (
//       <ThemedButton onClick={props.changeTheme}>
//         Change Theme
//       </ThemedButton>
//     );
// }
  
// export default class App extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         theme: themes.light,
//       };
  
//       this.toggleTheme = () => {
//         this.setState(state => ({
//           theme:
//             state.theme === themes.dark
//               ? themes.light
//               : themes.dark,
//         }));
//       };
//     }
  
//     render() {
//       // ThemedButton 位于 ThemeProvider 内
//       // 在外部使用时使用来自 state 里面的 theme
//       // 默认 dark theme
//       return (
//         <div>
//           <ThemeContext.Provider value={this.state.theme}>
//             <Toolbar changeTheme={this.toggleTheme} />
//           </ThemeContext.Provider>
//           <div>
//             <ThemedButton>这里的主题颜色不会变化</ThemedButton>
//           </div>
//         </div>
//       );
//     }
// }
  