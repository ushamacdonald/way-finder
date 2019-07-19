import React from "react";
import { Link } from "react-router-dom";
import circle from "./circle.png";
import "./App.css";

function QuestionThree() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Awesome, one last question!</h1>
        <h2>Do you like things that are...</h2>
        <div className="pure-g">
          <div className="pure-u-1-3">
            <Link to="results" className="question-button">
              <img src={circle} className="question-image" />
              <p>Summer</p>
            </Link>
          </div>
          <div className="pure-u-1-3">
            <p>or</p>
          </div>
          <div className="pure-u-1-3">
            <Link to="results" className="question-button">
              <img src={circle} className="question-image" />
              <p>Winter</p>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default QuestionThree;
