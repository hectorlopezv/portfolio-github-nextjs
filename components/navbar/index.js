export const NavBar = (props) => {
  return (
    <header className="d-flex flex-column justify-content-center">
      <nav className="nav-menu">
        <ul>
          {props.options.map((option, index) => {
            return (
              <li
                key={option.href}
                className={`${index === 0 ? "active" : ""}`}
              >
                <a href={option.href}>
                  <i className={option.iconClass}></i>
                  <span>{option.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
