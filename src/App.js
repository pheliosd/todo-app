import React, { Component } from 'react';
import logo from './logo.svg';
import FirstComponent from  './components/learning-examples/FirstComponent'
import './App.css';


class App extends Component {
  render() {
    return (
        <div className="App">
            Pheliosd's Workspace
            {/*syntax is called as JSX*/}
            <FirstComponent></FirstComponent>
            <SecondComponent/>
            <ThirdComponent/>
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

//Function Component -> it is an easier way to declare than class component
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