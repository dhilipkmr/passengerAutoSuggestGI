import React, {Component} from 'react';
import { connect } from "react-redux";
import CounterActions from "../../Actions/CounterActions";


import './Counter.css';

class counter extends Component{

	updateCount = (label, addOrSub) => {
		this.props.countHandler(label, addOrSub);
	    this.disableButton(addOrSub);
	}

	disableButton = (buttonType) => {
		if (buttonType === "reduce") {
			switch (this.props.label) {
				case ("Adults") : 
					return this.props.val === 1 ? { disabled:'disabled' } : {};
				default : 
					return this.props.val === 0 ? { disabled:'disabled' } : {};
			}
		} else {
			return this.props.val === 9 ? { disabled:'disabled' } : {};
		}
		
	}


	render() {
		return (
			<div className = "counter">
				<button {...this.disableButton("reduce")} onClick = { () => this.props.count("reduce", this.props.label, -1) }>-</button>
				<input className="counterBox" type="text" value={this.props.val} readOnly></input>
				<button {...this.disableButton("add")} onClick = { () => this.props.count("add", this.props.label, 1) }>+</button>
			</div>
		); 
	}
}

const mapStateToProps = (state) => {
  return {
    pacs : state.pacs
  };
}
const mapDispatchToProps = (dispatch) => {
	return {
		count : (typ, label, val) => {
			dispatch(CounterActions(typ, label, val));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(counter);
