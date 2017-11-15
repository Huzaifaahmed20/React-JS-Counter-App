import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';



class Helloworld extends Component {
annchorstyle={
  backgroundColor:"pink"
}

  render() {
    return (
     <a href={this.props.link} style={this.annchorstyle}>{this.props.text}</a>
    );
  }
}

export default Helloworld;
