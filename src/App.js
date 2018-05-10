import React, { Component } from 'react';
import './App.css';
import Pacs from './component/Pacs/Pacs';
import SearchSuggest from './container/SearchSuggest/SearchSuggest'

class App extends Component {
  state = {
    pacs : {
      adults : {
        label : "Adults",
        info : "12+ yrs",
        count : 1
      },
      children : {
        label : "Children",
        info : "2-12 yrs",
        count : 0
      },
      infants : {
        label : "Infants",
        info : "below 2 yrs",
        count : 0
      }
    },
    totalTravellers : 1,
    warning : false
  }

  totalTravellers = () => {

     return Object.keys(this.state.pacs).reduce((prev,curr) => {
              return prev + this.state.pacs[curr].count;
            },0);
  } 

  countHandler = (pacType, addOrSub) => {
    if (addOrSub === "reduce" || (addOrSub === "add" && this.state.totalTravellers < 9 )) {
      let oldContent = {...this.state.pacs};
      if(addOrSub === "add"){
        oldContent[pacType.toLowerCase()].count++;
      } else {
        oldContent[pacType.toLowerCase()].count--;
      }
      const newTotalTravellers = this.totalTravellers();
      const isInfantWarn = this.state.pacs['adults'].count < this.state.pacs['infants'].count;
      this.setState({pacs : oldContent, totalTravellers : newTotalTravellers, warning : false, infantWarn : isInfantWarn});
    } else {
      this.setState({warning:true});
    }
    
  }

  removePAC =()=>{
    document.getElementById("pacsContainer").remove();
  }

  render() {
    return (
      <div className="App">
        <h2> PACS</h2> 
        <Pacs id = "pacs" infantWarn = {this.state.infantWarn} warning={this.state.warning} pacsInfo = {this.state.pacs} countHandler={this.countHandler.bind(this)} remove={this.removePAC} totalTravellers={this.state.totalTravellers}/>
        <SearchSuggest/>
      </div>
    );
  }
}

export default App;
