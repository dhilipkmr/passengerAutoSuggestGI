import React, { Component } from "react";
import { connect } from "react-redux";

import AutoSearchAction from "../../Actions/AutoSuggestAction";
import SearchList from "../SearchList/SearchList";

import "./AutoSuggest.css";

class AutoSuggest extends Component {

	beginAutoSuggest = (event) => {
		const val = event.target.value;
		if (val !== "" && !this.props.autoSearchTerms[val]){
			this.props.autoSearchSuggest(val);			//rest, update autoSearchTerms, currentInput and selected
		} else {
			this.props.update(val);						//update currentInput, selected
		}
	}

	render() {

		return (
			<div className="searchContainer">
				<input
					id = "searchInput"
					className = "search" 
					type = "text" 
					value = { this.props.currentInput } 
					onChange = { (event) => { this.beginAutoSuggest(event)}}>
				</input>
				{ this.props.selected ? null : <SearchList /> }
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		autoSearchTerms : state.autoSearchTerms,
		currentInput : state.currentInput,
		selected : state.selected
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		autoSearchSuggest : (searchTerm) => {
			dispatch(AutoSearchAction(searchTerm));
		},
		update : (val) => {
			dispatch({
				type : "currentSearchTerm",
				payload : val
			});
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(AutoSuggest);
