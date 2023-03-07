import { Link } from "react-router-dom";
import { handleLogout } from "../../hooks/fetch-data-hooks";
import "./header.css";

export const Header = () => {
  const logo = "{...}";

  const onSubmit = async () => {
    await handleLogout();
  };

  return (
    <header className="header">
      <Link className="header-logo" to={"/"}>
        <h1>
          {logo} <br />
          FREESPOTS
        </h1>
      </Link>
      <div className="search">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search jobs"
        />
      </div>
      <nav className="header-navigation">
        <ul className="nav-list">
          <li className="nav-link">
            <Link to={"/register"}>Register</Link>
          </li>
          <li className="nav-link">
            <Link to={"/login"}>Login</Link>
          </li>
          <li className="nav-link">
            <Link onClick={onSubmit} to={"/"}>
              Logout
            </Link>
          </li>
          <li className="nav-link">
            <Link to={"/profile"}>Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
