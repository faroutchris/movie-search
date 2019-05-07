import { config } from "./../config";
import { apport } from "./../libs/apport";

const { endpoint, key } = config.tmdb;

export const searchMovies = (query, page = 1) => {
  return apport.get(`${endpoint}/search/movie`, {
    query: query,
    page: page,
    api_key: key
  });
};

export const getMovieById = id => {
  return apport.get(`${endpoint}/movie/${id}`, {
    append_to_response: encodeURIComponent("credits,videos,recommendations"),
    api_key: key
  });
};
