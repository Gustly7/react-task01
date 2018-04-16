import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class PureCompClass extends React.PureComponent{
    render(){
        return <h1>Hello, i'm "React.PureComponent" component!</h1>
    }
}

export default PureCompClass;