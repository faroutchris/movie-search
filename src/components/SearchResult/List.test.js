import React from "react";
import ReactDOM from "react-dom";
import List from "./List";
import response from "./../../../mock-data/search-result";
import SearchResultItem from "../../models/SearchResultItem";

it("renders without crashing", () => {
  const searchResults = response.results.map(
    result => new SearchResultItem(result)
  );

  const div = document.createElement("div");
  ReactDOM.render(<List searchResults={searchResults} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing when no data is passed in", () => {
  const div = document.createElement("div");
  ReactDOM.render(<List />, div);
  ReactDOM.unmountComponentAtNode(div);
});
