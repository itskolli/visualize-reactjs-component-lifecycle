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

class React16 extends Component {
  constructor() {
    super();
    this.state = {
      i: 0
    };
    observerNext("constructor");
  }
  componentDidMount(){
    observerNext("componentDidMount");
  }
  static getDerivedStateFromProps() {
    observerNext("getDerivedStateFromProps");
    return null;
  }
  shouldComponentUpdate(){
    observerNext("shouldComponentUpdate");
    return true;
  }
  componentDidUpdate(){
    observerNext("componentDidUpdate");
    console.groupEnd();
  }
  componentWillUnMount() {
    observerNext("componentWillUnMount");
  }

  render() {
    observerNext("render");
    return (
      <div>
        <h3>Hello, {this.props.message ? this.props.message : ""}</h3>
        <input type="button" value="Change state" onClick={() => {counter=0;this.setState({i: this.state.i + 1})}}/>
        <h1>{this.state.i}</h1>
      </div>
    );
  }
}

export default React16;
