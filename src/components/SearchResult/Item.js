import React from "react";
import StarRating from "./StarRating";

const Item = ({ result }) => (
  <div>
    <h2>
      {result.title} ({result.year})
    </h2>
    <p>
      <StarRating score={result.score} /> ({result.votes})
    </p>
    <img key={result.id} alt={result.title} src={result.poster} />
    {result.genres.map((genre, i) => (
      <span key={i} style={{ backgroundColor: `${genre.color}` }}>
        {genre.name}
      </span>
    ))}
  </div>
);

export default Item;
