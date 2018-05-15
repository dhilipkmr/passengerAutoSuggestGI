import React, { Component } from "react";
import SearchList from "./SearchList/SearchList";
import AutoSuggestRest from "./AutoSuggestRest";
import "./AutoSuggest.css";

class AutoSuggest extends Component {
	constructor (props) {
		super(props);
		this.state = {
			autoSearchTerms : {},
			currentInput : "",
			selected : false
		}
	}
	selected = (currentInputVal) => {
		this.setState({ selected : true, currentInput : currentInputVal });
	}
	beginAutoSuggest = (event) => {
		const val = event.target.value;
		let resultingState = {};
		resultingState.selected = false;
		resultingState.currentInput = val;
		if (val !== "" && !this.state.autoSearchTerms[val]) {
			AutoSuggestRest(val).then(response => {
				resultingState.autoSearchTerms = {
					[val] : response
				};
				this.setState({ ...resultingState });
			});
		} else {
			this.setState({ ...this.state, ...resultingState });
		}	
	}
	changeOnSelect = () => {
		return this.state.selected ? { value : this.state.currentInput } : {};
	}
	render() {
		return (
			<div className="searchContainer">
				<input
					id = "searchInput"
					className = "search" 
					type = "text" 
					{ ...this.changeOnSelect() }
					onChange = { (event) => { this.beginAutoSuggest(event)}}>
				</input>
				{ 
					this.state.selected ? null : 
					<SearchList 
						autoSearchTerms = { this.state.autoSearchTerms }
						currentInput = { this.state.currentInput }
						selected = { this.selected }/>
				}
			</div>
		);
	}
}

export default AutoSuggest;
