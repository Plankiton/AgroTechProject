import React, { Component } from 'react';
import './App.css';
import HomePage from './Home.js';
import Routes from './routes.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage/>
      </div>
    );
  }
}

export default App;
