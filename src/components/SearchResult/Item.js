import React from "react";
import { Link } from "react-navi";
import StarRating from "../Shared/StarRating";
import PosterImage from "../Shared/PosterImage";
import GenresList from "../Shared/GenresList";

const Item = ({ result }) => (
  <Link className="result-item" href={`/movie/${result.id}`}>
    <PosterImage alt={result.title} src={result.poster} className="poster" />
    <div className="details">
      <div className="title-container">
        <h2 className="title">{result.title}</h2>
        <p className="year">{result.year}</p>
      </div>

      <div className="stars">
        <StarRating score={result.score} />
      </div>

      <p className="overview">{result.overview}</p>

      <GenresList genres={result.genres} />
    </div>
  </Link>
);

export default Item;
