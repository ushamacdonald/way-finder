import React from "react";
import { Link } from "react-router-dom";
import circle from "./circle.png";
import "./App.css";

function QuestionTwo() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Great! Now tell us more.</h1>
        <h2>Do you like things that are...</h2>
        <div className="pure-g">
          <div className="pure-u-1-3">
            <Link to="questionthree" className="question-button">
              <img src={circle} className="question-image" />
              <p>Beach</p>
            </Link>
          </div>
          <div className="pure-u-1-3">
            <p>or</p>
          </div>
          <div className="pure-u-1-3">
            <Link to="questionthree" className="question-button">
              <img src={circle} className="question-image" />
              <p>Forest</p>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default QuestionTwo;
