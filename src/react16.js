import React, { Component } from 'react';

class React16 extends Component {
  constructor() {
    super();
    this.state = {
      i: 0
    };
    console.warn("triggered constructor");
  }
  componentDidMount(){
    console.warn("triggered componentDidMount");
  }
  static getDerivedStateFromProps() {
    console.warn("triggered getDerivedStateFromProps");
    return null;
  }
  shouldComponentUpdate(){
    console.warn("triggered shouldComponentUpdate");
    return true;
  }
  componentDidUpdate(){
    console.warn("triggered componentDidUpdate");
  }
  componentWillUnMount() {
    console.warn("triggered componentWillUnMount");
  }

  render() {
    console.warn("triggered render");
    return (
      <div>
        <h3>Hello, {this.props.message ? this.props.message : ""}</h3>
        <input type="button" value="Change state" onClick={() => {this.setState({i: this.state.i + 1})}}/>
        <h1>{this.state.i}</h1>
      </div>
    );
  }
}

export default React16;
