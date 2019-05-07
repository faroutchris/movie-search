import React from "react";
import { useCurrentRoute, Link } from "react-navi";
import "./SearchResult.css";
import arrowPrev from "./../../assets/arrow-prev.svg";
import arrowNext from "./../../assets/arrow-next.svg";

const List = ({ next, prev, text }) => {
  const currentRoute = useCurrentRoute();

  const search = currentRoute.url.search || null;

  return (
    <div className="pagination">
      {prev ? (
        <Link href={`/search/${prev}${search}`}>
          <img
            className="pagination-icon"
            src={arrowPrev}
            alt="Previous Page"
          />
        </Link>
      ) : (
        <div className="pagination-empty" />
      )}
      <span className="pagination-text">{text}</span>
      {next && (
        <Link href={`/search/${next}${search}`}>
          <img className="pagination-icon" src={arrowNext} alt="Next Page" />
        </Link>
      )}
    </div>
  );
};

export default List;
