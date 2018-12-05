import React, { Component } from 'react';
import React15 from "./react15";
import React16 from "./react16";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message_15: "",
      message_16: ""
    };
    this.messagesList = ["Good morning", "Good afternoon", "Good evening", "Good night"];
  }

  render() {
    var item = this.messagesList[Math.floor(Math.random()*this.messagesList.length)];
    return (
      <div className="App">
          <h3>React 15 LifeCycle Methods</h3>
          <React15 message={this.state.message_15}/>
          <input type="button" value="Change props" onClick={() => {this.setState({message_15: item})}}/>
          <hr/>
          <h3>React 16 LifeCycle Methods</h3>
          <React16 message={this.state.message_16}/>
          <input type="button" value="Change props" onClick={() => {this.setState({message_16: item})}}/>
      </div>
    );
  }
}

export default App;
