import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { searchMovies } from "./../../api/tmdb";
import SearchResultItem from "../../models/SearchResultItem";
import SearchForm from "./../SearchForm/SearchForm";
import Root from "./../Root/Root";
import List from "./../SearchResult/List";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [pages, setPages] = useState(0);
  const [error, setError] = useState(null);

  const search = async event => {
    event.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const response = await searchMovies(query);
      const results = response.results.map(
        result => new SearchResultItem(result)
      );

      setSearchResults(results);
      setPages(response.total_pages);
      setLoading(false);
      console.log(results);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  /* 
    Create the search results list here so we don't 
    have to supply props down the component hierarchy.
    The state in the app is simple enough to keep at this top level component imo.
  */
  const searchResultComponent = !error && !loading && (
    <List searchResults={searchResults} pages={pages} />
  );

  return (
    <div className="app">
      <Router>
        <SearchForm query={query} setQuery={setQuery} onSearch={search} />
        {error && <div>{error.message}</div>}
        {loading && <div>Loading</div>}
        <Route
          path="/"
          exact
          component={() =>
            !error &&
            !loading && <Root searchResultComponent={searchResultComponent} />
          }
        />
        <Route path="movie/:id" exact component={null} />
      </Router>
    </div>
  );
};

export default App;
