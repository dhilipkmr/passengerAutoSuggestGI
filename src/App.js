import React, { Component } from "react";

import Pacs from "./component/Pacs/Pacs";
import AutoSuggest from "./component/AutoSuggest/AutoSuggest"

import "./App.css";

class App extends Component {

  render() {
    return (
      <div className = "App">
        <h2>Passenger Component</h2> 
        <Pacs id="pacs"/>
        <h2>AutoSuggest Component</h2> 
        <AutoSuggest/>
      </div>
    );
  }
}

export default App;
