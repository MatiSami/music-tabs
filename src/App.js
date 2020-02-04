import React, {Component} from "react";
import logo from './logo.svg';
import "./App.css";
import SearchTool from './Components/search-tool'

import "../src/scss/main.scss"

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <SearchTool/>
        </header>
    </div>
  );
}

export default App;
