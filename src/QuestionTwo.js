import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function QuestionTwo() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="">Do you like the colour red?</p>
        <button>
          <Link to="questionthree">Beach</Link>
        </button>
        <button>
          <Link to="questionthree">Forest</Link>
        </button>
      </header>
    </div>
  );
}

export default QuestionTwo;
