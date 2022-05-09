import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            Pheliosd's Workspace
            {/*syntax is called as JSX*/}
            <FirstComponent></FirstComponent>
            <ThirdComponent/>
        </div>
    );
  }
}
//Class Component
class FirstComponent extends Component {
    render() {
        return (
            <div className="abc1">
               First Component
                <SecondComponent/>
            </div>
        );
    }
}
class SecondComponent extends Component{
    render() {
        return (
            <div className="test-2">
                Second Component
            </div>
        )
    }
}

function  ThirdComponent(){
    return (
        <div className="c3">
            Third Component
        </div>
    );
}

//
// class ThirdComponent extends Component{
//     render() {
//         return (
//             <div className="test-2">
//                 Third Component
//             </div>
//         )
//     }
// }

export default App;