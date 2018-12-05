import React, { Component } from 'react';

class React15 extends Component {
  constructor() {
    super();
    this.state = {
      i: 0
    };
    console.log("triggered constructor");
  }
  componentWillMount(){
    console.log("triggered componentWillMount");
  }
  componentDidMount(){
    console.log("triggered componentDidMount");
  }
  componentWillReceiveProps() {
    console.log("triggered componentWillReceiveProps");
  }
  shouldComponentUpdate(){
    console.log("triggered shouldComponentUpdate");
    return true;
  }
  componentWillUpdate(){
    console.log("triggered componentWillUpdate");
  }
  componentDidUpdate(){
    console.log("triggered componentDidUpdate");
  }
  componentWillUnMount() {
    console.log("triggered componentWillUnMount");
  }

  render() {
    console.log("triggered render");
    return (
      <div>
        <h3>Hello, {this.props.message ? this.props.message : ""}</h3>
        <input type="button" value="Change state" onClick={() => {this.setState({i: this.state.i + 1})}}/>
        <h1>{this.state.i}</h1>
      </div>
    );
  }
}

export default React15;
