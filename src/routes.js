import React from "react";
import { mount, route } from "navi";
import { searchMovies, getMovieById } from "./api/tmdb";
import SearchResult from "./components/SearchResult/SearchResult";
import MoviePage from "./components/MoviePage/MoviePage";
import SearchResultItem from "./models/SearchResultItem";
import SearchResultMeta from "./models/SearchResultMeta";
import MovieAsset from "./models/MovieAsset";

import logo from "./assets/logo.svg";

const Test = () => {
  return (
    <div>
      <img src={logo} alt="" />
    </div>
  );
};

// Define your routes
const routes = mount({
  "/": route({
    title: "Search movies",
    view: <Test />
  }),
  "/search/:page": route(async req => {
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
      view: <SearchResult searchResults={results} searchMeta={meta} />
    };
  }),
  "/movie/:id": route(async req => {
    let { id } = req.params;

    const response = await getMovieById(id);
    const movie = new MovieAsset(response);

    return {
      title: `${movie.title}`,
      view: <MoviePage movie={movie} />
    };
  })
});

export default routes;
