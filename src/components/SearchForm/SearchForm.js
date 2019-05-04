import React, { useRef } from "react";
import { Redirect } from "react-router-dom";
import "./SearchForm.css";

const SearchForm = ({ setQuery, onSearch }) => {
  const searchRef = useRef(null);

  const handleSearch = event => {
    onSearch(event);
    return <Redirect to="/" />;
  };

  return (
    <form className="form" onSubmit={handleSearch}>
      <input
        className="search"
        ref={searchRef}
        type="search"
        placeholder="Search movies."
        onChange={() => setQuery(searchRef.current.value)}
      />
    </form>
  );
};

export default SearchForm;
