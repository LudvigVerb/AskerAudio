import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppBar from "./components/AppBar";

function App() {
  return (
    <div className="App">
      <AppBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Heisann! Her kommer rå nettside snart.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
