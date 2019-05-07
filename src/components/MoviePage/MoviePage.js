import React from "react";
import PosterImage from "../Shared/PosterImage";
import StarRating from "../Shared/StarRating";
import CastList from "./CastList";
import "./MoviePage.css";

const MovieAsset = ({ movie }) => {
  console.log(movie);
  return (
    <div className="movie-container">
      <div className="details">
        <PosterImage alt={movie.title} src={movie.poster} className="poster" />
        <div>
          <h1>
            {movie.title} <span className="year">({movie.year})</span>
          </h1>
          <div className="stars">
            <StarRating score={movie.score} />
            <span className="votes">{movie.votes}</span>
          </div>
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
        </div>
      </div>

      <article className="article">
        <p className="article-paragraph">{movie.overview}</p>
        <span className="article-info">Release date: {movie.releaseDate}</span>
      </article>

      {movie.cast.length > 0 && (
        <>
          <h2>Cast</h2>
          <CastList cast={movie.cast} />
        </>
      )}
    </div>
  );
};

export default MovieAsset;
