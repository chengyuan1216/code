import React, { Component } from 'react';
import './App.css';
import Routes from './router/index'

class App extends Component {
  render() {
    return (
      <div class="app">
        <div class="side">

        </div>
        <div class="main">
          <Routes></Routes>
        </div>
      </div>
    );
  }
}

export default App;