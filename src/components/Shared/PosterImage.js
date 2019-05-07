import React from "react";
import "./Shared.css";

const PosterImage = ({ alt, src, className }) => (
  <div className={`${className} poster-image`}>
    <div className="image-container">
      <img className="image" src={src} alt={alt} />
    </div>
  </div>
);

export default PosterImage;
