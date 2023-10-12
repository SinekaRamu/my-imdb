import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="navBar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/home">Add Movie</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
