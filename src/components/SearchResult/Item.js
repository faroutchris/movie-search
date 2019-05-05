import React from "react";
import StarRating from "./StarRating";
import PosterImage from "./PosterImage";

const Item = ({ result }) => (
  <div className="item">
    <PosterImage alt={result.title} src={result.poster} />
    <div className="details">
      <div className="title-container">
        <h2 className="title">{result.title}</h2>
        <p className="year">{result.year}</p>
      </div>

      <div className="stars">
        <StarRating score={result.score} />
      </div>

      <p className="overview">{result.overview}</p>

      <ul className="genre-container">
        {result.genres.map((genre, i) => (
          <li
            className="genre"
            key={i}
            style={{ backgroundColor: `${genre.color}` }}
          >
            {genre.name}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Item;
