import React  from 'react';
import { HashRouter, Link, Route } from 'react-router-dom';
// import { hashHistory } from 'react-router';
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Product = () => (
  <div>
    <h2>Product</h2>
  </div>
)

// function createElement(Component, props) {
//     // 确保传入了所有的 props！
//     console.log('createElement route', props)
//     return (
//       <React.Fragment>
//         <Link to="/">Home</Link>
//         <Link to="/About">About</Link>
//         <Link to="/Product">Product</Link>
//         <Component {...props}/>
//       </React.Fragment>
//     )
// }

export default () => (
    <HashRouter>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/product" component={Product}></Route>
    </HashRouter>
)