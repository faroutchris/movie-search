import React from "react";
import { useCurrentRoute, Link } from "react-navi";

const List = ({ next, prev, text }) => {
  console.log(next, prev, text);
  const currentRoute = useCurrentRoute();

  const search = currentRoute.url.search || null;

  return (
    <div>
      {prev && <Link href={`/search/${prev}${search}`}>Prev</Link>}
      {text}
      {next && <Link href={`/search/${next}${search}`}>Next</Link>}
    </div>
  );
};

export default List;
