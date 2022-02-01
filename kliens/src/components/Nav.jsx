import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-blue">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="./fooldal">
            Főoldal
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="./aloldal">
            Aloldal
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
