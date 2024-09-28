import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/#">Home</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/book-search">Book Search</Link>
          </li>
          <li>
            <Link to="/users-index">Users Index</Link>
          </li>
          <li>
            <Link to="/bookshelf-index">Bookshelf Index</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
