import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
      >
        Home
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/discover"
        className={
          window.location.pathname === "/discover" ? "nav-link active" : "nav-link"
        }
      >
        About
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/search"
        className={
          window.location.pathname === "/search" ? "nav-link active" : "nav-link"
        }
      >
        Blog
      </Link>
    </li>
  </ul>
);

export default Nav;