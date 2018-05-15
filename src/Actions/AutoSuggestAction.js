import $ from 'jquery';

const AutoSuggestAction = (searchTerm) => {
	return (dispatch) => {
		$.ajax({
			url: "https://voyager.goibibo.com/api/v1/flights_search/find_node_by_name_v2/?search_query=" + searchTerm + "&limit=10",
			type : "GET"
		}).then((response) => { 
			dispatch({
				type : "search",
				payload : {
					searchTerm : searchTerm,
					result : response
				}
			});
		});
	}
}

export default AutoSuggestAction;