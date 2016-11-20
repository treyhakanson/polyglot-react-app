import { combineReducers } from 'redux';

const articles = function(state = [], action) {
	return state;
}

const rootReducer = combineReducers({
	articles
});

export default rootReducer;