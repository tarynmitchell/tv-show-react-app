import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <nav className="navbar__nav">
          <h3 className="navbar__brand">
            <Link to="/">
              <FontAwesomeIcon icon={faVideo} /> TV SHOW SEARCH
            </Link>
          </h3>
          <ul className="nav-links">
            <li className="links-links">
              <Link to="/">Home</Link>
            </li>
            <li className="links-links">
              <Link to="./pages/Aboutpage.js">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
