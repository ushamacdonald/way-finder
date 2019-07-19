import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import QuestionOne from './QuestionOne'

function App() {
  return (
    <div className="App">
      <h1>Find what to see based on your personality</h1>
      <Link to="questionone">Begin</Link>
    </div>
  );
}

export default App;
