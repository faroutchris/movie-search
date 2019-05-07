import React from "react";
import { useCurrentRoute, useLoadingRoute } from "react-navi";
import SearchForm from "./../SearchForm/SearchForm";
import Loader from "./../Loader/Loader";
import attribution from "./../../assets/attribution.svg";
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

      <Loader isLoading={loadingRoute} delayMs={300}>
        <>
          <main>{children}</main>
          <footer className="footer">
            <img
              src={attribution}
              alt="Powered by themoviedb.com"
              width="240"
            />
          </footer>
        </>
      </Loader>
    </div>
  );
};

export default App;
