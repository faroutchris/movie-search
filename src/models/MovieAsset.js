import missingPoster from "./../assets/missing.svg";
import { GENRES } from "../constants";

/* --------------------------------------------------------------------
 | This model shares a lot of methods/getters with SearchResultItem.js
 | A possible approach is to extract these methods in another class
 | and provide them to both models in the constructor. For profit
 ---------------------------------------------------------------------- */

export default class MovieAsset {
  constructor(movie) {
    this.movie = movie;
  }

  get id() {
    return this.movie.id;
  }

  get title() {
    const { name, title, original_name, original_title } = this.movie;
    return `${name || title || original_name || original_title}`;
  }

  get cast() {
    const cast = this.movie.credits.cast.slice(0, 9);

    if (Array.isArray(cast)) {
      return cast.map(this.parseCast);
    } else {
      return [];
    }
  }

  get video() {
    const videos = this.movie.videos.results;

    return (
      (videos.length > 0 && videos.find(v => v.site === "YouTube")) || null
    );
  }

  get poster() {
    const { poster_path } = this.movie;

    if (poster_path) {
      return `http://image.tmdb.org/t/p/w300${poster_path}`;
    }

    return missingPoster;
  }

  get backdrop() {
    const { backdrop_path } = this.movie;

    if (backdrop_path) {
      return `http://image.tmdb.org/t/p/w1280${backdrop_path}`;
    }

    return null;
  }

  get genres() {
    return this.movie.genres.map(g => GENRES.find(genre => genre.id === g.id));
  }

  get score() {
    if (this.movie.vote_count === 0) {
      return 0;
    }
    return this.mapVoteToScore(this.movie.vote_average);
  }

  get votes() {
    const count = this.movie.vote_count;

    if (count === 0) {
      return "No rating";
    }
    if (count === 1) {
      return "1 vote";
    }
    return `${count} votes`;
  }

  get year() {
    const releaseDate = this.movie.release_date;
    if (releaseDate !== "") {
      return releaseDate.slice(0, 4);
    }
    return "-";
  }

  get releaseDate() {
    return this.movie.release_date;
  }

  get overview() {
    return this.movie.overview;
  }

  parseCast(cast) {
    return {
      character: cast.character,
      actor: cast.name,
      profile: `http://image.tmdb.org/t/p/w185${cast.profile_path}`
    };
  }

  mapVoteToScore(value) {
    return Math.round(value) / 2;
  }
}
