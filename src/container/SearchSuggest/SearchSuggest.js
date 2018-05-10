import React, { Component } from 'react';
import './SearchSuggest.css';

class SearchSuggest extends Component {
	
	render(){
		return (
			<div className="searchContainer">
				<input id="searchInput" type="text" placeholder="Type to Begin Search" ></input>
			</div>
		);
	}
}

export default SearchSuggest;