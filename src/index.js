import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import About from "./views/About";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Route exact path={"/"} component={App} />
    <Route exact path={"/omOss"} component={About} />
  </BrowserRouter>,
  document.getElementById("root")
);
