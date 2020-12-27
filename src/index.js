import React from "react";
import ReactDOM from "react-dom";
import AuthProvider from "./provider/AuthProvider";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
    </React.StrictMode>
  </BrowserRouter>,
  rootElement
);
