import React from "react";
import { useState } from "react";
import Alert from "./Alert";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchHandler = function (event) {
    event.preventDefault();
  };

  return (
    <div class="searchbar">
      <Alert message="Please enter something" type="danger" />
      <form className="searchbar_form">
        <input
          type="text"
          placeholder="Search For TV Show"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-block" onClick={onSearchHandler}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
