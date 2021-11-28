import { Component } from "react";
import { Typing } from "../typing";
export class Resume extends Component {
  render() {
    const options = {
      strings: ["Check my resume"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      cursorChar: "|",
    };
    return (
      <div className="Resume">
        {" "}
        <Typing options={options} query={"animated_resume"}>
          <a
            href="https://docs.google.com/document/d/1cUyegq-sTUIZSP47L9ZlB27HvbgSSM2M/edit?usp=sharing&ouid=116457680686012873205&rtpof=true&sd=true"
            target="blank"
          >
            &nbsp;
            <span
              id="animated_resume"
              className="typed"
              style={{ whiteSpace: "pre" }}
              ref={(el) => {
                this.el = el;
              }}
            />
          </a>
        </Typing>
      </div>
    );
  }
}

export default Resume;
