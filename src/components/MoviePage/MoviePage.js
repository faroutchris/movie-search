import React from "react";
import PosterImage from "../Shared/PosterImage";
import StarRating from "../Shared/StarRating";
import "./MoviePage.css";

const MovieAsset = ({ movie }) => {
  console.log(movie);
  return (
    <div className="movie-container">
      {movie.backdrop && (
        <div
          alt={""}
          style={{
            position: "absolute",
            width: "100%",
            height: "400px",
            top: 0,
            left: 0,
            zIndex: -1,
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), #fff ), url(${
              movie.backdrop
            })`,
            backgroundBlendMode: "lighten",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            backgroundSize: "cover"
            // opacity: 0.7
          }}
        />
      )}
      <h1>{movie.title}</h1>
      <div className="stars">
        <StarRating score={movie.score} />
        {movie.votes}
      </div>
      <span>{movie.year}</span>
      <PosterImage alt={movie.title} src={movie.poster} className="poster" />
      <p>{movie.overview}</p>

      <ul className="genre-container">
        {movie.genres.map((genre, i) => (
          <li
            className="genre"
            key={i}
            style={{ backgroundColor: `${genre.color}` }}
          >
            {genre.name}
          </li>
        ))}
      </ul>
      <span>Release date: {movie.releaseDate}</span>
    </div>
  );
};

export default MovieAsset;
