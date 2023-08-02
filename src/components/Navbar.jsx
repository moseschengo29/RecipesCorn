import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <ul className="nav-links">
        <li>
          <NavLink to="/about" activeClassName="navlink">
            About 
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="navlink">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/rateUs" activeClassName="navlink">
            Rate us
          </NavLink>
        </li>
        <li className="login">
          <NavLink to="/login" activeClassName="navlink">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
