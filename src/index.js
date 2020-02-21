import React from "react";
import ReactDOM from "react-dom";
import "./scss/App.scss";
import App from "./App";
import { init } from "@rematch/core";
import { Provider } from "react-redux";

import shutter from "./models/shutter";

const store = init({
  models: {
    shutter
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
