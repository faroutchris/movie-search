import React from "react";
import StarFull from "./../../assets/star-full.svg";
import StarHalf from "./../../assets/star-half.svg";
import "./Shared.css";

const StarRating = ({ score }) => {
  const stars = [];

  for (let i = 0; i < score; i++) {
    if (i + 1 <= score) {
      stars.push(<img className="star" src={StarFull} key={i} alt={score} />);
    }
    if (i + 0.5 === score) {
      stars.push(<img className="star" src={StarHalf} key={i} alt={score} />);
    }
  }

  return stars.length > 0 ? stars : "No rating";
};

export default StarRating;
