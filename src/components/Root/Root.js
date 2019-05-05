import React from "react";
import List from "../SearchResult/List";
import TotalResults from "../SearchResult/TotalResults";
import Pagination from "../SearchResult/Pagination";
const Root = ({ searchResults, searchMeta }) => {
  console.log(searchMeta);
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
export default Root;
