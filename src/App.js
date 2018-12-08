import React, { Component } from 'react';
import React15 from "./react15";
import React16 from "./react16";
import './App.css';
import LifeCycle from "./life-cycle-methods";

class App extends Component {
  constructor() {
    super();
    this.state = {
      message_15: "",
      message_16: "",
      react16: false
    };
    this.messagesList = ["Good morning", "Good afternoon", "Good evening", "Good night"];
  }

  componentDidMount() {

  }

  render() {
    var item = this.messagesList[Math.floor(Math.random()*this.messagesList.length)];
    return (
      <div className="App">
        <label className="react16-switch">Show React 16 Component<input type="checkbox" onClick={() => {this.setState({react16: !this.state.react16})}}/></label>
        <LifeCycle reactVersion16={this.state.react16}/>
        <hr/>
        {!this.state.react16 ? <div className="half">
          <h3>React 15 LifeCycle Methods</h3>
          <React15 message={this.state.message_15}/>
          <input type="button" value="Change props" onClick={() => {this.setState({message_15: item})}}/>
        </div> : ""}
        {this.state.react16 ? <div className="half">
          <h3>React 16 LifeCycle Methods</h3>
          <React16 message={this.state.message_16}/>
          <input type="button" value="Change props" onClick={() => {this.setState({message_16: item})}}/>
        </div> : ""}
      </div>
    );
  }
}

export default App;
