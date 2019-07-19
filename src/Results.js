import React from "react";
import { Link } from "react-router-dom";
import circle from "./circle.png";
import "./App.css";

function Results() {
  return (
    <div className="App">
      <h2>You got Penguin!</h2>
      <p>Choose your species</p>
      <div className="pure-g">
        <div className="pure-u-1-3">
          <Link to="questiontwo" className="question-button">
            <img src={circle} className="question-image" />
            <p>Little Penguin</p>
          </Link>
        </div>
        <div className="pure-u-1-3">
          <Link to="questiontwo" className="question-button">
            <img src={circle} className="question-image" />
            <p>Erect-crested Penguin</p>
          </Link>
        </div>
        <div className="pure-u-1-3">
          <Link to="questiontwo" className="question-button">
            <img src={circle} className="question-image" />
            <p>Royal Penguin</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Results;
