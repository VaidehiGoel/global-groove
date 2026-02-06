import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="nav-logo">Global Groove</span>
      </div>

      <div className="nav-right">
        <Link
          to="/"
          className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
        >
          Home
        </Link>

        <Link
          to="/favourites"
          className={`nav-link ${
            location.pathname === "/favourites" ? "active" : ""
          }`}
        >
          Favourites
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
