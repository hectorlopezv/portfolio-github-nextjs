import { Component } from "react";
import { Typing } from "../typing";
import { Links } from "../links";
import { Link } from "../links/link";
export class SignBoard extends Component {
  render() {
    return (
      <div
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="row align-items-center">
          <div className="col-md-auto h1_home">
            <h1>Hector Vinicio Lopez Molinares</h1>
            <Typing options={this.props.lettersOptions} query={"animated_tech"}>
              <p className="d-block ">
                {" "}
                I'm&nbsp;
                <span
                  id="animated_tech"
                  className="typed"
                  style={{ whiteSpace: "pre" }}
                />
              </p>
            </Typing>
            <Links css_class={"d-flex social-links justify-content-center"}>
              {this.props.links.map((link) => (
                <Link key={link.name} link={link.url} name_icon={link.name} />
              ))}
            </Links>
          </div>
        </div>
      </div>
    );
  }
}
