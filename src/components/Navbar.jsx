import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <ul className="nav-links">
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="login">
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
