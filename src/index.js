import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./i18n";
import i18next from "i18next";
import { store } from "./Store";
import { Provider } from "react-redux";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
const lang = localStorage.getItem("lang") || "en";
axios.defaults.headers.common['Accept-Language'] = lang
i18next.changeLanguage(lang);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
reportWebVitals();
