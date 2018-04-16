import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloClass from './App';
import PureComp from './PureComp';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();

function tick(){
    const elem = (
            <div>
                <h1> Hello</h1>
                <h2>Time is {new Date().toLocaleTimeString()}</h2>
            </div>
        );
    ReactDOM.render(
        elem,
        document.getElementById('root')
    )
}
//setInterval(tick,1000);

var elem = React.createElement('div',{},'<h1> Hello, i\'m "React.createElement" component!&#128005;</h1>');

ReactDOM.render(
    elem,
    document.getElementById('root')
);

//React.Component
ReactDOM.render(
    <HelloClass/>,
    document.getElementById('root2')
);

//React.PureComponent
ReactDOM.render(
    <PureComp/>,
    document.getElementById('root3')
);

//functional component
function HelloFunc(props) {
    return <h1> Hello, {props.name}. I'm a functional component</h1>
}

const elemFunc = <HelloFunc name = "User" />;
ReactDOM.render(
    elemFunc,
    document.getElementById('root4')
);