import React from "react";
import { useState } from "react";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchHandler = function (event) {
    event.preventDefault();
  };

  return (
    <div class="searchbar">
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
