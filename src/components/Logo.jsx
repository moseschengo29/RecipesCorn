import { Link } from "react-router-dom";
import logo from "../assets/favicon.png";

function Logo() {
  return (
    <Link to="/" className="logo">
      <img src={logo} alt="site-logo" className="logo-img" />
      <h1>
        Recipes<span className="tag">Corn</span>
      </h1>
    </Link>
  );
}

export default Logo;
