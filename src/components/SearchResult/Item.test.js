import React from "react";
import ReactDOM from "react-dom";
import Item from "./Item";
import response from "./../../../mock-data/search-result";
import SearchResult from "../../models/SearchResultItem";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Item result={new SearchResult(response.results[0])} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
