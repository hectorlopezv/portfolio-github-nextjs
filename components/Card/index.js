import Image from "next/image";
export const Card = (props) => {
  const { src, title, info, demo, git } = props;
  return (
    <div className="card">
      <Image
        src={src}
        alt={`Picture of Post 4 ${title}`}
        width={200}
        height={200}
        layout="intrinsic"
        priority
      />

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{info}</p>
      </div>
      <div className="container d-flex">
        <div className="row">
          <div className="col card-link__1 ">
            <a href={git} rel="noreferrer" target="_blank">
              <i className="bx bxl-github"></i>
            </a>
          </div>
          <div className="col">
            <a href={demo} rel="noreferrer" target="_blank">
              <i className="bx bx-camera-movie"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
