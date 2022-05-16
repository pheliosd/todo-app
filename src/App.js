import React, { Component } from 'react';
// import logo from './logo.svg';
import FirstComponent from  './components/learning-examples/FirstComponent'
import  SecondComponent from './components/learning-examples/SecondComponent'
import  ThirdComponent from './components/learning-examples/ThirdComponent'
import './App.css';


class App extends Component {
  render() {
    return (
        <div className="App">
            Pheliosd's Workspace
            <LearningComponent/>
        </div>
    );
  }
}

class LearningComponent extends Component{
    render() {
        return (
            <div className="App">
                Pheliosd's Workspace

            </div>
        );
    }
}

//Function Component -> it is an easier way to declare than class component


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