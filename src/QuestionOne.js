import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function QuestionOne() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>What are you looking for?</h1>
        <h2>Do you like things that are...</h2>
        <div className="pure-g">
          <div class="pure-u-1-3">
            <Link to="questiontwo" className="pure-button">
              Soft and fluffy
            </Link>
          </div>
          <div class="pure-u-1-3">
            <p>or</p>
          </div>
          <div class="pure-u-1-3">
            <Link to="questiontwo" className="pure-button">
              Hard and spikey
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default QuestionOne;
