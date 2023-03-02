import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
  const navigation = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/register",
      title: "Register",
    },
    {
      path: "/login",
      title: "Login",
    },
    {
      path: "/logout",
      title: "Logout",
    },
  ];
  return (
    <header>
      <h1>Logo</h1>
      <nav className="navigation">
        <ul className="nav-list">
          {navigation.map(({ title, path }, index) => (
            <li className="nav-link" key={`${title}-${index}`}>
              <Link to={path}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
