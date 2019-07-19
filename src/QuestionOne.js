import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function QuestionOne() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="">Do you like the colour red?</p>
        <button>
          <Link to="questiontwo">Soft and fluffy</Link>
        </button>
        <button>
          <Link to="questiontwo">Hard and spikey</Link>
        </button>
      </header>
    </div>
  );
}

export default QuestionOne;
