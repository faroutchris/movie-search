import React from "react";
import { lazy, mount, route } from "navi";
import { useCurrentRoute } from "react-navi";
import Root from "./components/Root/Root";
import { searchMovies } from "./api/tmdb";
import SearchResultItem from "./models/SearchResultItem";
import SearchResultMeta from "./models/SearchResultMeta";

const Test = () => {
  return <div>Välkommen</div>;
};

// Define your routes
const routes = mount({
  "/": route({
    title: "Search movies",
    view: <Test />
  }),
  "/search/:page": route(async req => {
    console.log("params", req.params);

    let { q, page } = req.params;

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
      view: <Root searchResults={results} searchMeta={meta} />
    };
  })
});

export default routes;
