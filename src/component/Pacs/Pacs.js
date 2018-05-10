import React from 'react';
import './Pacs.css';
import Counter from '../../container/Counter/Counter';

const pacs = (props) => {
	console.log(props.pacsInfo);
	const pacsInfoArray = Object.keys(props.pacsInfo);
	

	this.togglePacsContainer = () => {
		let pacsContainer = document.getElementById("pacsContainer")
		if (pacsContainer.classList.contains('hide')) {
			pacsContainer.classList.remove('hide');
		} else {
			pacsContainer.classList.add('hide');
		}
	}

	this.warningHandler = (warn) => {
		if (warn) {
			return "warning"
		} else {
			return "hide warning";
		}
	}

	this.remove = () => {
		document.getElementById("pacsContainer").classList.add('hide');
	}


	return (
		<div >
			<div className="travellerCounter">
				<p>{ props.totalTravellers +" Traveller(s)"}</p>
				<p onClick={this.togglePacsContainer}>Modify</p>
			</div>

			<div className="pacsContainer hide" id="pacsContainer">
				<p className={this.warningHandler(props.warning)}>ERROR: Maximum of 9 travellers allowed</p>
				<p className={this.warningHandler(props.infantWarn)}>ERROR: Number of infants cannot be more than adults</p>

				{
					
					pacsInfoArray.map((entry, index) => (
						<div key={index} className="pacsMapper">
							<p className="label">{props.pacsInfo[entry].label}</p>
							<p className="info">{ "(" + props.pacsInfo[entry].info + ")"}</p>
							<Counter val = {props.pacsInfo[entry].count} countHandler= {props.countHandler} label={props.pacsInfo[entry].label}/>
						</div>
					))
				}
				<div id="closeBtn" className="close" onClick={this.remove}> X </div>
			</div>
		</div>
	);
}

export default pacs;
