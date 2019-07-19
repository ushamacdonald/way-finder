import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function QuestionThree() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="">Do you like the colour red?</p>
        <button>
          <Link to="results">Summer</Link>
        </button>
        <button>
          <Link to="results">Winter</Link>
        </button>
      </header>
    </div>
  );
}

export default QuestionThree;
