import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="navBar">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/form">Add Movie</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
