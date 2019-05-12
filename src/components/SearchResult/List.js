import React from "react";
import Item from "./Item";

const List = ({ searchResults = [] }) => {
  return (
    <div>
      {searchResults.map(result => (
        <Item key={result.id} result={result} />
      ))}
    </div>
  );
};

export default List;
