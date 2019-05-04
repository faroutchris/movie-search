import React from "react";
import "./SearchResult.css";

const PosterImage = ({ alt, src }) => (
  <div className="poster">
    <div className="image-container">
      <img className="image" src={src} alt={src} />
    </div>
  </div>
);

export default PosterImage;
