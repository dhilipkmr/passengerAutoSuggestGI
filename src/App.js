import React, { Component } from "react";

import Pacs from "./component/Pacs/Pacs";

import "./App.css";

class App extends Component {

  render() {
    return (
      <div className = "App">
        <h2>Passenger Component</h2> 
        <Pacs id="pacs"/>
      </div>
    );
  }
}

export default App;
