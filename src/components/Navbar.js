import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <nav>
          <h3>
            <Link to="/">
              <FontAwesomeIcon icon={faVideo} /> TV SHOW SEARCH
            </Link>
          </h3>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
