import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="">Do you like the colour red?</p>
        <form>
        <div className="radio">
          <label>
            <input type="radio" value="yes" />
            Yes
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="no" />
            No
          </label>
        </div>
      </form>
      </header>
    </div>
  );
}

export default App;
