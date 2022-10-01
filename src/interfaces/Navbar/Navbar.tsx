import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-element">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
