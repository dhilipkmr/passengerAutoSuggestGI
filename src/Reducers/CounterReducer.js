const totalTravellers = (content) => {
 return Object.keys(content).reduce((prev,curr) => {
    return prev + content[curr].count;
  },0);
} 

const CounterReducer = (state, action) => {
  let newContent = {...state.pacs};
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
