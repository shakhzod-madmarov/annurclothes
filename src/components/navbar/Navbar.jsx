import { Link, useLocation } from "react-router-dom";

import NavLinks from "./NavLinks";
import Search from "../Search";

import "../../styles/components/navbar/Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="nav">
      <div className="nav-inner container">
        <NavLinks />
        <Link to="/">
          <img
            className="nav-logo__img"
            src="/src/assets/logo.png"
            alt="logo"
          />
        </Link>
        <div className="nav-inner">
          <Search />
          <Link
            to="/login"
            className={location.pathname === "/login" ? "active" : ""}
          >
            Login
          </Link>
          <Link
            to="/cart"
            className={location.pathname === "/cart" ? "active" : ""}
          >
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
