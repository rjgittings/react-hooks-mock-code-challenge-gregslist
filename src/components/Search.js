import React from "react";

function Search({searchTerm, setSearchTerm}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);
  }
  

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" onSubmit={e => setSearchTerm(e.target.value)}>🔍</button>
    </form>
  );
}

export default Search;
