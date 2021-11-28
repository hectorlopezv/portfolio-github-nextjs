import { Component } from "react"; // Import the desired words
import Typed from "typed.js";

export class Typing extends Component {
  componentDidMount() {
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, this.props.options);
  }
  componentWillUnmount() {
    // Please don't forget to cleanup animation layer
    this.typed.destroy();
  }

  render() {
    return (
      <p className="d-block ">
        {" "}
        I'm&nbsp;
        <span
          className="typed"
          style={{ whiteSpace: "pre" }}
          ref={(el) => {
            this.el = el;
          }}
        />
      </p>
    );
  }
}
