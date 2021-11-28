export const Link = (props) => {
  const { link, name_icon } = props;
  return (
    <a href={link} rel="noreferrer" target="_blank">
      <i className={`bx bxl-${name_icon}`}></i>
      <span></span>
    </a>
  );
};
