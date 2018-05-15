import React, { Component } from "react";
import { connect } from "react-redux";

import AutoSearchAction from "../../Actions/AutoSuggestAction";
import SearchList from "../SearchList/SearchList";

import "./AutoSuggest.css";

class AutoSuggest extends Component {
	beginAutoSuggest = (event) => {
		var input = document.getElementsByClassName("searchListContainer");
		const val = event.target.value;
		if (!val) {
			input[0].classList.add("hide");	
		} else {
			input[0].classList.remove("hide");	
		}
		if (!this.props.autoSearchTerms[val]){
			this.props.autoSearchSuggest(val);
		} else {
			this.props.update(val);
		}
	}

	render() {

		return (
			<div className="searchContainer">
				<input id="searchInput" className="search" type="text" onKeyUp={ (event) => { this.beginAutoSuggest(event)}}></input>
				<SearchList />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		autoSearchTerms : state.autoSearchTerms
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
