import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            Hello World
            <Abc></Abc>
        </div>
    );
  }
}
//Class Component
class Abc extends Component {
    render() {
        return (
            <div className="abc1">
                abc class
            </div>
        );
    }
}

export default App;