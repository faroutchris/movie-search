import React from "react";
import { useCurrentRoute } from "react-navi";
import SearchForm from "./../SearchForm/SearchForm";
import "./App.css";

const App = ({ children }) => {
  const currentRoute = useCurrentRoute();

  return (
    <div className="app">
      <header>
        <SearchForm query={currentRoute ? currentRoute.url.query.q : ""} />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default App;
