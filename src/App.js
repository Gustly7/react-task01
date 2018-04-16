import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class App extends Component {
// //   render() {
// //     var myname = "Gust";
// //     var elem = <h1> Hello </h1>;
// //     return (
// //       <div className="App">
// //         <header className="App-header">
// //           <img src={logo} className="App-logo" alt="logo" />
// //           <h1> Hello {myname}!</h1>
// //         </header>
// //       </div>
// //     );
// //   }
// // }
// //
// // export default App;

class HelloClass extends React.Component{
    render(){
        return <h1>Hello, i'm "React.Component" component!</h1>
    }
}

export default HelloClass;