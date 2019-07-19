import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, BrowserRouter, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import QuestionOne from "./QuestionOne";
import QuestionTwo from "./QuestionTwo";
import QuestionThree from "./QuestionThree";
import Results from "./Results";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/questionone" component={QuestionOne} />
      <Route path="/questiontwo" component={QuestionTwo} />
      <Route path="/questionthree" component={QuestionThree} />
      <Route path="/results" component={Results} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
