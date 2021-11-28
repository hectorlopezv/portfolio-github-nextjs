import { Component } from "react"; // Import the desired words
import Typed from "typed.js";

export class Typing extends Component {
  componentDidMount() {
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(
      document.getElementById(this.props.query),
      this.props.options
    );
  }
  componentWillUnmount() {
    // Please don't forget to cleanup animation layer
    this.typed.destroy();
  }

  render() {
    return this.props.children;
  }
}
