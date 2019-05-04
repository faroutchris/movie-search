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
