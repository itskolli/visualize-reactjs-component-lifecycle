import React, {Component} from "react";
import Observer from "./observer";

const lmethods = {
  constructor: "",
  shouldcomponentupdate: "",
  componentwillupdate: "",
  render: "",
  componentdidupdate: "",
  componentwillmount: "",
  componentdidmount: "",
  componentwillreceiveprops: "",
  getderivedstatefromprops: "",
  componentwillunmount: ""
};
class LifeCycle extends Component{
  constructor() {
    super();
    this.state = {
      constructor: "",
      shouldcomponentupdate: "",
      componentwillupdate: "",
      render: "",
      componentdidupdate: "",
      componentwillmount: "",
      componentdidmount: "",
      componentwillreceiveprops: "",
      getderivedstatefromprops: "",
      componentwillunmount: "",
      depricatedInReact16: " [✗ 16]",
      newInReact16: " [✗ 15 | ✔ 16]"
    }
  }

  componentDidMount() {
    const $this = this;
    Observer.subscribe((item) => {
      const updateState = Object.assign({}, lmethods, {[item.toLowerCase()]: "active"});
      $this.setState(updateState);
    });
  }
  render(){
    return(
      <div className="life-cycle-methods">
        <table cellPadding="5px">
          <thead>
            <tr>
              <th>Mount</th>
              <th>Update</th>
              <th>UnMount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className={`${this.state.constructor}`}>Constructor</span>
                <span className={`${this.state.componentwillmount}`}>ComponentWillMount {this.props.reactVersion16 ? this.state.depricatedInReact16 : ""}</span>
                <span className={`${this.state.render}`}>Render</span>
                <span className={`${this.state.componentdidmount}`}>ComponentDidMount</span>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <span className={`${this.state.componentwillreceiveprops}`}>ComponentWillReceiveProps {this.props.reactVersion16 ? this.state.depricatedInReact16 : ""}</span>
                <span className={`${this.state.getderivedstatefromprops}`}>getDerivedStateFromProps {this.state.newInReact16}</span>
                <span className={`${this.state.shouldcomponentupdate}`}>ShouldComponentUpdate</span>
                <span className={`${this.state.componentwillupdate}`}>ComponentWillUpdate {this.props.reactVersion16 ? this.state.depricatedInReact16 : ""}</span>
                <span className={`${this.state.render}`}>Render</span>
                <span className={`${this.state.componentdidupdate}`}>ComponentDidUpdate</span>
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>
                <span className={`${this.state.componentwillunmount}`}>componentWillUnMount</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default LifeCycle;
