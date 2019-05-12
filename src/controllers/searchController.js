import React from "react";
import SearchResultItem from "./../models/SearchResultItem";
import SearchResultMeta from "./../models/SearchResultMeta";
import SearchResult from "./../components/SearchResult/SearchResult";
import { ERRORCODES } from "../constants";

export default searchMovies => async req => {
  let { q, page } = req.params;

  try {
    const response = await searchMovies(q, page);

    const results = response.results.map(
      result => new SearchResultItem(result)
    );

    const meta = new SearchResultMeta(
      response.page,
      response.total_pages,
      response.total_results
    );

    return {
      title: `${q} - Page ${page}`,
      view: <SearchResult searchResults={results} searchMeta={meta} />
    };
  } catch (error) {
    if (error.code === ERRORCODES.UNPROCESSABLE) {
      const meta = new SearchResultMeta(1, 1, 0);
      return {
        title: `${q} - Page ${page}`,
        view: <SearchResult searchResults={[]} searchMeta={meta} />
      };
    }
  }
};
