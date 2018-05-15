import React, { Component } from "react";
import "./SearchList.css"

class searchlist extends Component {
	loadChildren = () => {
		if (this.props.autoSearchTerms[this.props.currentInput]) {
			let content = this.props.autoSearchTerms[this.props.currentInput].data.r;
			return content.map((term,index) => {
				return (
					<li 
					key = { index } 
					className = "searchlistItem"
					onClick = { (e) => { this.props.selected(e.currentTarget.children[0].textContent) }} >
						<div className = "name">{ term.xtr.cn +" "}
							<span className = "iata">({ term.iata }) </span>
						</div>
						<div className = "airport">{ term.n }</div>
						<div className = "country">{ term.xtr.cnt_n }</div>
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

export default searchlist;
