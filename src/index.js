import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloClass from './App';
import PureComp from './PureComp';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();

// function tick(){
//     const elem = (
//             <div>
//                 <h1> Hello</h1>
//                 <h2>Time is {new Date().toLocaleTimeString()}</h2>
//             </div>
//         );
//     ReactDOM.render(
//         elem,
//         document.getElementById('root')
//     )
// }
//setInterval(tick,1000);

//functional component
function HelloFunc(props) {
    return <h1> Hello, {props.name}. I'm a functional component</h1>
}

var elem = React.createElement('div',{},
    //React.createElement('h1', {}, 'Hello, i\'m "React.createElement" component! &#128005;')
    React.createElement('h1', {}, <div dangerouslySetInnerHTML= {{__html:'Hello, i\'m "React.createElement" component! &#128269;'}} />)
);

const MainElem = React.createElement('div',{},
    elem,
    <HelloClass/>,
    <PureComp/>,
    <HelloFunc name = "User" />
);

ReactDOM.render(
    MainElem,
    document.getElementById('root')
);