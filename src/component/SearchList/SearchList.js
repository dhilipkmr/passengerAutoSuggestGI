import React, { Component } from "react";
import { connect } from "react-redux";

import "./SearchList.css"

class searchlist extends Component {

	loadChildren = () => {
		if (this.props.autoSearchTerms[this.props.currentInput]) {
			return this.props.autoSearchTerms[this.props.currentInput].map((term,index) => {
				return (
					<li 
					key={index} 
					className="searchlistItem" 
					onClick={(e) => { this.props.updateSelectionAndCurent(e.currentTarget.children[0].textContent)}}>
						<div className = "name">{ term.name +" "}
							<span className = "iata">({term.iata}) </span>
						</div>
						<div className = "airport">{ term.airport }</div>
						<div className="country">{ term.country }</div>
					</li>
				);
			});
		} else {
			return <div/>
		}
	}

	render() {
		return (
			<ul className = "searchListContainer">
			{this.loadChildren()}
			</ul>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		autoSearchTerms : state.autoSearchTerms,
		currentInput : state.currentInput
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateSelectionAndCurent : (val) => {
			dispatch({ type : "updateSelectionAndCurent", payload : val })
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(searchlist);
