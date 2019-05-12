import React from "react";
import MovieAsset from "./../models/MovieAsset";
import MoviePage from "./../components/MoviePage/MoviePage";
import NotFound404 from "../components/UIStates/ErrorScreen/NotFound404";
import { ERRORCODES } from "../constants";

export default getMovieById => async req => {
  let { id } = req.params;

  try {
    const response = await getMovieById(id);

    const movie = new MovieAsset(response);

    return {
      title: `${movie.title}`,
      view: <MoviePage movie={movie} />
    };
  } catch (error) {
    if (error.code === ERRORCODES.NOTFOUND) {
      return {
        title: `Not found :(`,
        view: <NotFound404 />
      };
    }
  }
};
