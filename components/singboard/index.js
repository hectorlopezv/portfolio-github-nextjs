import { Typing } from "../typing";
import { Links } from "../links";
import { Link } from "../links/link";
export const SignBoard = (props) => {

  return (
    <div
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="row align-items-center">
        <div className="col-md-auto h1_home">
          <h1>Hector Vinicio Lopez Molinares</h1>
          <Typing options={props.lettersOptions} />
          <Links css_class={"d-flex social-links justify-content-center"}>
            {props.links.map((link) => (
              <Link key={link.name} link={link.url} name_icon={link.name} />
            ))}
          </Links>
        </div>
      </div>
    </div>
  );
};
