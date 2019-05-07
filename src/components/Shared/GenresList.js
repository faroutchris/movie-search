import React from "react";

const GenresList = ({ genres }) => {
  return (
    <ul className="genre-container">
      {genres.map((genre, i) => (
        <li
          className="genre"
          key={i}
          style={{ backgroundColor: `${genre.color}` }}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default GenresList;
