import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/js/all.js";
import "./index.css";
import App from "./app";
import AuthService from "./services/authService";

const authService = new AuthService();
ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById("root")
);
