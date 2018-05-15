const CounterActions = (typ, label, val) => {
	return { 
				type: typ, 
				payload : { 
					label : label, 
					value : val 
				}
			};
}

export default CounterActions;
