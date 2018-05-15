import $ from 'jquery';

const AutoSuggestRest = (searchTerm) => {
    return $.ajax({
        url: "https://voyager.goibibo.com/api/v1/flights_search/find_node_by_name_v2/?search_query=" + searchTerm + "&limit=10",
        type : "GET"
    }).then(response => response);
}

export default AutoSuggestRest;