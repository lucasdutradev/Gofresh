import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Provider from "./Providers";
import { DefaultStyles } from "./styles";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

ReactDOM.render(
  <React.StrictMode>
    <DefaultStyles />
    <Provider>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
