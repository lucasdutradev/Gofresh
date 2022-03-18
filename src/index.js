import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Provider from "./Providers";
import GlobalStyle from "./styles";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <Provider>
            <ToastContainer />
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
