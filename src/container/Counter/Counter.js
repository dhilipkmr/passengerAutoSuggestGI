import React, {Component} from 'react';
import './Counter.css';

class counter extends Component{
	constructor(props){
		super(props);
		this.state = {...props};
		console.log(this.state);
	}

	updateCount = (label, addOrSub) => {
		this.props.countHandler(label, addOrSub);
	    this.disableButton(addOrSub);
	}

	disableButton = (buttonType) => {

		if (buttonType === "reduce") {
			switch (this.state.label) {
				case ("Adults") : 
					return this.state.val === 1 ? {disabled:'disabled'} : {};
				default : 
					return this.state.val === 0 ? {disabled:'disabled'} : {};
			}
		} else {
			return this.state.val === 9 ? {disabled:'disabled'} : {};
		}
		
	}

	componentWillReceiveProps(nextProps, nextState){
		console.log(nextProps);
		let oldState = {...this.state};
		oldState.val = nextProps.val;
		this.setState({...oldState});
	}


	render(){
		return (
			<div className="counter">
				<button {...this.disableButton("reduce")} onClick = {this.updateCount.bind(this,this.state.label, "reduce")}>-</button>
				<input className="counterBox" type="text" value={this.state.val}></input>
				<button {...this.disableButton("add")} onClick = {this.updateCount.bind(this, this.state.label, "add")}>+</button>
			</div>
		); 
	}
}

export default counter;
