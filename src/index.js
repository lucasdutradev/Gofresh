import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Provider from "./Providers";
import { DefaultStyles } from "./styles";

ReactDOM.render(
  <React.StrictMode>
    <DefaultStyles />
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
