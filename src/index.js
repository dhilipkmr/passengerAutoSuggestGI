import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';	
import { createStore, applyMiddleware } from "redux";	//for Async Calls
import  thunk from "redux-thunk";		//For Async Calls to work

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import CounterReducer from  "./Reducers/CounterReducer";

const initialStoreContent = {
  pacs : {
    adults : {
      label : "Adults",
      info : "12+ yrs",
      count : 1
    },
    children : {
      label : "Children",
      info : "2-12 yrs",
      count : 0
    },
    infants : {
      label : "Infants",
      info : "below 2 yrs",
      count : 0
    }
  },
  totalTravellers : 1,
  warning : false
};

const store = createStore(CounterReducer, initialStoreContent, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store = { store }>
		<App />
	</Provider> , document.getElementById('root'));
registerServiceWorker();
