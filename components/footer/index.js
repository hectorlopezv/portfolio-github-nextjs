import { useEffect } from "react";
import { Link } from "../links/link";
import { Links } from "../links";
import AOS from "aos";

export const Footer = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <footer id="footer" data-aos="fade-right">
      <div className="container">
        <h3>{props.options.title}</h3>
        <p>{props.options.experience}</p>
        <Links css_class={"d-flex social-links justify-content-center"}>
          {props.options.links.map((link) => (
            <Link key={link.name} link={link.url} name_icon={link.name} />
          ))}
        </Links>

        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Hector Vinicio Lopez Molinares</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </footer>
  );
};
