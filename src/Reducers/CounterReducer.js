const totalTravellers = (content) => {
 return Object.keys(content).reduce((prev,curr) => {
    return prev + content[curr].count;
  },0);
} 

const CounterReducer = (state, action) => {
  let newContent = {...state.pacs};
  // let searchContent = {...state.autoSearchTerms};
  let warn = false;

  switch (action.type) {
    case ("add") : 
      if(state.totalTravellers < 9) {
        newContent[action.payload.label.toLowerCase()].count = 
          newContent[action.payload.label.toLowerCase()].count + action.payload.value; 
          warn = false;
      } else {
        warn = true;
      } 
    break;


    case ("reduce") : 
      newContent[action.payload.label.toLowerCase()].count = 
        newContent[action.payload.label.toLowerCase()].count + action.payload.value; 
      warn = !(state.totalTravellers <= 9) ;
    break;


    case "search" :
      if (action.payload.result.success) {
        let matches = action.payload.result.data.r.map((v,i,a) => {   //Find the matched Airport names
          return {
            name : v.xtr.cn,
            iata : v.iata,
            airport : v.n,
            country : v.xtr.cnt_n
          } 
        });   
        let searchMapper = {                                          //Construct the Mapper based on searchTerms and update the store
          [action.payload.searchTerm] : matches
        }
        Object.assign(state.autoSearchTerms, searchMapper);
        state.currentInput = action.payload.searchTerm;
        state.selected = false;
      } 
      console.log(state);
      break;

    case "currentSearchTerm" : 
      state.currentInput = action.payload;
      state.selected = false;
      break;
    case "updateSelectionAndCurent" : 
      console.log(action.payload);
      state.selected = true;
      state.currentInput = action.payload;
      break;
      
    default : 
      return state;
  }

  let newTotalTravellers = totalTravellers(newContent);
  
  state = {
    ...state,
    pacs : newContent,
    totalTravellers : newTotalTravellers,
    infantWarn : newContent['adults'].count < newContent['infants'].count,
    warning : warn,

  }
  return state;
}

export default CounterReducer;
