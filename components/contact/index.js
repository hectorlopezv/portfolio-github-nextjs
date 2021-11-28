import { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
import { Resume } from "../resume";
export const Contact = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div id="contact" className="container mt-x contact" data-aos="fade-right">
      <h2 className="about-title">{props.options.title}</h2>
      <div className="row">
        <div className="col-lg-8 mt-5 mt-lg-0">
          <div className="info d-flex justify-content-center align-items-center">
            {props.options.information.map((el) => (
              <div key={el.name} className={`${el.name} mt-x mr-x d-flex`}>
                <i className={el.iconClass}></i>
                <div className="info-text ">
                  <h4 className="d-block">{el.title}</h4>
                  <p>{el.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-4 flex items-center justify-center flex-col mt-11 ">
          <Image
            className="rounded-full"
            src={props.options.photoSrc}
            alt={`Picture of the Author`}
            width={305}
            height={305}
            layout="intrinsic"
            priority
          />

          <Resume />
        </div>
      </div>
    </div>
  );
};
