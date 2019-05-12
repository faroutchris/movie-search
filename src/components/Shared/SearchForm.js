import React, { useState } from "react";
import { useNavigation } from "react-navi";
import "./SearchForm.css";

const SearchForm = props => {
  const [query, setQuery] = useState(props.query || "");
  const navigation = useNavigation();

  const handleSubmit = event => {
    event.preventDefault();

    const encQuery = encodeURIComponent(query);
    if (encQuery.trim()) {
      navigation.navigate(`/search/1?q=${encQuery}`);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="search"
        type="search"
        placeholder="Search movies."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
