import React from "react";
import Item from "./Item";

const List = ({ searchResults = [], pages = 1 }) =>
  searchResults.map(result => <Item key={result.id} result={result} />);

export default List;
