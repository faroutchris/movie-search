import React from "react";
import { useCurrentRoute, useLoadingRoute } from "react-navi";
import SearchForm from "./../SearchForm/SearchForm";
import Loader from "./../Loader/Loader";
import "./App.css";

const App = ({ children }) => {
  const currentRoute = useCurrentRoute();
  const loadingRoute = !!useLoadingRoute();

  console.log(loadingRoute);

  return (
    <div className="app">
      <header>
        <SearchForm query={currentRoute ? currentRoute.url.query.q : ""} />
      </header>
      {loadingRoute ? (
        <Loader />
      ) : (
        <>
          <main>{children}</main>
          <footer>Powered by themoviedatabase.com</footer>
        </>
      )}
    </div>
  );
};

export default App;
