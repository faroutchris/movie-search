import React from "react";
import "./SearchResult.css";

const PosterImage = ({ alt, src }) => (
  <div className="poster">
    <div className="image-container">
      <img className="image" src={src} alt={alt} />
    </div>
  </div>
);

export default PosterImage;
