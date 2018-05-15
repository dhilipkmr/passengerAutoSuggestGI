import $ from 'jquery';

const AutoSuggestRest = (searchTerm) => {
    return $.ajax({
        url: "",
        type : "GET"
    }).then(response => response);
}

export default AutoSuggestRest;
