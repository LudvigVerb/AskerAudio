import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import About from "./views/About";
import { BrowserRouter, Route } from "react-router-dom";
console.log(process.env.PUBLIC_URL);

ReactDOM.render(
  <BrowserRouter>
    <Route exact path={process.env.PUBLIC_URL + "/"} component={App} />
    <Route exact path={process.env.PUBLIC_URL + "/omOss"} component={About} />
  </BrowserRouter>,
  document.getElementById("root")
);
