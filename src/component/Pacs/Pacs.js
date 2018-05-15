import React from "react";
import {connect} from "react-redux";
import Counter from "../../container/Counter/Counter";
import "./Pacs.css";

let PASSENGER_COUNT_WARNING = "Number of Passengers cannot exceed 9";
let INFANTS_COUNT_WARNING = "Number of infants cannot be more than adults";

const warning = (val) => {
	return <p className = "warning">{ val }</p>
} 

const pacs = (props) => {
	const pacsContainerRef = React.createRef();
	const pacsInfoArray = Object.keys(props.pacsInfo);

	this.togglePacsContainer = () => {
		pacsContainerRef.current.classList.toggle("hide");
	}

	this.hide = () => {
		pacsContainerRef.current.classList.toggle("hide");
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
			<div className = "pacsContainer hide" ref = { pacsContainerRef }>
				{ props.warning ? warning(PASSENGER_COUNT_WARNING) : null }
				{ props.infantWarn ? warning(INFANTS_COUNT_WARNING) : null }
				{ passengerTypeGenerator }
				<div className = "close" onClick = { this.hide }>X</div>
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
