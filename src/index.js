import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import { Router, View, NotFoundBoundary } from "react-navi";
import App from "./components/App/App";
import "./index.css";
import routes from "./routes";

import NotFound404 from "./components/ErrorScreen/NotFound404";
import Loader from "./components/Loader/Loader";

ReactDOM.render(
  <Router routes={routes}>
    <App>
      <Suspense fallback={<Loader />}>
        <NotFoundBoundary render={() => <NotFound404 />}>
          <View />
        </NotFoundBoundary>
      </Suspense>
    </App>
  </Router>,
  document.getElementById("root")
);
