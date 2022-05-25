import React from "react";
import Search from "./Search";

function Header({searchTerm, onSearchChange}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search />
    </header>
  );
}

export default Header;
