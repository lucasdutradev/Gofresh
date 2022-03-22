import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Provider from "./Providers";
import DefaultStyles from "./styles";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <DefaultStyles />
        <Provider>
            <ToastContainer />
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
