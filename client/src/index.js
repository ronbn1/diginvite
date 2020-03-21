import React from "react";
import ReactDOM from "react-dom";
import ContextProvider from "./ContextProvider";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
