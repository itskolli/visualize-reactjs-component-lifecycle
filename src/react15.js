import React, { Component } from 'react';
import Observer from "./observer";
let counter = 0;
const observerNext = (methodName) => {
  counter += 1;
  const delayBy = 800 + (counter * 300);
  setTimeout(() => {
    Observer.next(methodName);
  }, delayBy);
};

class React15 extends Component {
  constructor() {
    super();
    this.state = {
      i: 0
    };
    observerNext("constructor");

  }
  componentWillMount(){
    observerNext("componentWillMount");
  }
  componentDidMount(){
    observerNext("componentDidMount");
  }
  componentWillReceiveProps() {
    counter = 0;
    observerNext("componentWillReceiveProps");
  }
  shouldComponentUpdate(){
    observerNext("shouldComponentUpdate");
    return true;
  }
  componentWillUpdate(){
    observerNext("componentWillUpdate");

  }
  componentDidUpdate(){
    observerNext("componentDidUpdate");
  }
  componentWillUnMount() {
    observerNext("componentWillUnMount");
  }

  render() {
    observerNext("render");
    return (
      <div>
        <h3>Hello, {this.props.message ? this.props.message : "< Message >"}</h3>
        <input type="button" value="Change state" onClick={() => {counter=0;this.setState({i: this.state.i + 1})}}/>
        <h1>{this.state.i}</h1>
      </div>
    );
  }
}

export default React15;
