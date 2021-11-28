import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";

import CheckIcon from "./checkIcon";
export const About = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div id="about" className="container about" data-aos="fade-right">
      <div className="row title-about">
        <div className="col">
          <h2 className="about-title">About</h2>
          <p className="p_about_1">{props.options.title}</p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4" style={{ display: "block" }}>
          <Image
            src="/assests/pictures/Cara.png"
            alt="Picture of the author"
            width={305}
            height={305}
            layout="responsive"
          />
        </div>

        <div className="col-lg-8 pt-4 pt-lg-0 content">
          <h3>{props.options.identifies}</h3>
          <p className="font-italic"></p>
          <div className="row">
            <div className="col-lg-12">
              <ul>
                {props.options.personalInfo.map((element) => (
                  <li key={element.title}>
                    <CheckIcon>
                      <strong>{element.title}:</strong> <p>{element.about}</p>
                    </CheckIcon>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="p_about_2">{props.options.story}</p>
        </div>
      </div>
    </div>
  );
};
