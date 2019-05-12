import { mount, route } from "navi";
import { getMovieById, searchMovies } from "./api/tmdb";
import searchController from "./controllers/searchController";
import movieController from "./controllers/movieController";

const routes = mount({
  "/": route({
    title: "Search movies",
    view: () => null
  }),
  // provide the routes api dependency as a parameter so that we can mock it in the tests
  "/search/:page": route(searchController(searchMovies)),
  "/movie/:id": route(movieController(getMovieById))
});

export default routes;
