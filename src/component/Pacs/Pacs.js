import React from "react";
import {connect} from "react-redux";


import Counter from "../../container/Counter/Counter";

import "./Pacs.css";


const pacs = (props) => {
	const pacsInfoArray = Object.keys(props.pacsInfo);

	this.togglePacsContainer = () => {
		let pacsContainer = document.getElementById("pacsContainer")
		pacsContainer.classList.contains("hide") ? pacsContainer.classList.remove("hide"): pacsContainer.classList.add("hide");
	}

	this.warningHandler = (warn) => {
		return warn ? "warning" : "hide warning";
	}

	this.hide = () => {
		document.getElementById("pacsContainer").classList.add("hide");
	}

	let passengerTypeGenerator = pacsInfoArray.map((entry, index) => (
						<div key={index} className = "pacsMapper">
							<p className = "label">{ props.pacsInfo[entry].label }</p>
							<p className = "info">{ "(" + props.pacsInfo[entry].info + ")" }</p>
							<Counter val = { props.pacsInfo[entry].count } label = { props.pacsInfo[entry].label }/>
						</div>
					));
	return (
		<div>
			<div className = "travellerCounter">
				<p>{ props.totalTravellers + " Traveller(s)" }</p>
				<p onClick = { this.togglePacsContainer }>Edit</p>
			</div>
			<div className = "pacsContainer hide" id = "pacsContainer">
				<p className = { this.warningHandler(props.warning) }>ERROR: Maximum of 9 travellers allowed</p>
				<p className = { this.warningHandler(props.infantWarn) }>ERROR: Number of infants cannot be more than adults</p>
				{ passengerTypeGenerator }
				<div id = "closeBtn" className = "close" onClick = { this.hide }>X</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
  return {
    pacsInfo : state.pacs,
    totalTravellers : state.totalTravellers,
    warning : state.warning,
    infantWarn : state.infantWarn
  };
}


export default connect(mapStateToProps)(pacs);
