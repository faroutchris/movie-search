import React from "react";
import List from "./List";
import TotalResults from "./TotalResults";
import Pagination from "./Pagination";
const SearchResult = ({ searchResults, searchMeta }) => {
  return (
    <>
      <TotalResults text={searchMeta.totalResultsFound} />
      <List searchResults={searchResults} />
      <Pagination
        next={searchMeta.next}
        prev={searchMeta.prev}
        text={searchMeta.paginationInfo}
      />
    </>
  );
};
export default SearchResult;
