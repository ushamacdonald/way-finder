import React from "react";
import { Link } from "react-router-dom";
import circle from "./circle.png";
import "./App.css";

function QuestionOne() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>What are you looking for?</h1>
        <h2>Do you like things that are...</h2>
        <div className="pure-g">
          <div className="pure-u-1-3">
            <Link to="questiontwo" className="question-button">
              <img src={circle} className="question-image" />
              <p>Soft and fluffy?</p>
            </Link>
          </div>
          <div className="pure-u-1-3">
            <p>or</p>
          </div>
          <div className="pure-u-1-3">
            <Link to="questiontwo" className="question-button">
              <img src={circle} className="question-image" />
              <p>Hard and spikey?</p>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default QuestionOne;
