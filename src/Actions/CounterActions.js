const CounterActions = (typ, label, val) => {
	return { 
				type: typ, 
				payload : { 
					label : label, 
					value : val 
				}
			};

	// return dispatch => {
	// 	setTimeout(() => {
	// 		dispatch({ 
	// 			type: typ, 
	// 			payload : { 
	// 				label : label, 
	// 				value : val 
	// 			}
	// 		});
	// 	}, 2);
	// };
}

export default CounterActions;
