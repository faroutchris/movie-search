import React, { useRef } from "react";
import { withRouter } from "react-router-dom";
import "./SearchForm.css";

const SearchForm = ({ history, setQuery, onSearch }) => {
  const searchRef = useRef(null);

  const handleSearch = event => {
    history.push("/");
    onSearch(event);
  };

  return (
    <form className="form" onSubmit={handleSearch}>
      <input
        className="search"
        ref={searchRef}
        type="search"
        placeholder="Type and press Enter to search."
        onChange={() => setQuery(searchRef.current.value)}
      />
    </form>
  );
};

export default withRouter(SearchForm);
