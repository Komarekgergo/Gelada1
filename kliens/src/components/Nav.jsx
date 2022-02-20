import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="container-fluid border">
      <div className="container">
        <nav className="navbar navbar-expand-sm bg-white navbar-blue">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Kezdőlap
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/fooldal">
                Főoldal
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/figura">
                 Figurák
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/aloldal">
                Aloldal
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
