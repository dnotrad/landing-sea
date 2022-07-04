import React, { Suspense }  from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";
import "./i18n";

ReactDOM.render(
  <Suspense fallback={<div></div>}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>,
  document.getElementById("root")
);
