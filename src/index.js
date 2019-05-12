import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "raf/polyfill";
import React, { Suspense } from "react";
import { Router, View, NotFoundBoundary } from "react-navi";
import ReactDOM from "react-dom";
import routes from "./routes";
import NotFound404 from "./components/UIStates/ErrorScreen/NotFound404";
import ErrorScreen from "./components/UIStates/ErrorScreen/ErrorScreen";
import Loader from "./components/UIStates/Loader/Loader";
import App from "./components/App/App";

import "./index.css";
ReactDOM.render(
  <Router routes={routes}>
    <ErrorScreen>
      <App>
        <Suspense fallback={<Loader />}>
          <NotFoundBoundary render={() => <NotFound404 />}>
            <View />
          </NotFoundBoundary>
        </Suspense>
      </App>
    </ErrorScreen>
  </Router>,
  document.getElementById("root")
);
