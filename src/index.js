import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DefaultStyles } from "./styles";

ReactDOM.render(
  <React.StrictMode>
    <DefaultStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
