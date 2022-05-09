import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            Hello World
            {/*syntax is called as JSX*/}
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
                <BBA/>
            </div>
        );
    }
}
class BBA extends Component{
    render() {
        return (
            <div className="test-2">
                Sample class 2
            </div>
        )
    }
}

export default App;