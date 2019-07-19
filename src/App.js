import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import QuestionOne from "./QuestionOne";

function App() {
  return (
    <div className="App">
      <Link to="questionone" className="app-link">Find what to see based on your personality</Link>
    </div>
  );
}

export default App;
