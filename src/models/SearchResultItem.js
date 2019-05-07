import missingPoster from "./../assets/missing.svg";
import { GENRES } from "../constants";

export default class SearchResult {
  constructor(data) {
    this.data = data;
  }

  get id() {
    return this.data.id;
  }

  get title() {
    const { name, title, original_name, original_title } = this.data;
    return `${name || title || original_name || original_title}`;
  }

  get poster() {
    const { poster_path } = this.data;
    if (poster_path) {
      return `http://image.tmdb.org/t/p/w300${poster_path}`;
    }
    return missingPoster;
  }

  get genres() {
    return this.data.genre_ids.map(id => GENRES.find(genre => genre.id === id));
  }

  get score() {
    if (this.data.vote_count === 0) {
      return 0;
    }
    return this.mapVoteToScore(this.data.vote_average);
  }

  get votes() {
    const count = this.data.vote_count;

    if (count === 0) {
      return "No rating";
    }
    if (count === 1) {
      return "1 vote";
    }
    return `${count} votes`;
  }

  get year() {
    const releaseDate = this.data.release_date;
    if (releaseDate !== "") {
      return releaseDate.slice(0, 4);
    }
    return "-";
  }

  get overview() {
    const overview = this.data.overview;
    return overview.length > 120 ? overview.slice(0, 120) + "..." : overview;
  }

  mapVoteToScore(value) {
    return Math.round(value) / 2;
  }
}
