import { combineReducers } from 'redux';

const articles = function(state = [], action) {
	switch (action.type) {
		case 'GET_ARTICLES':
			return action.payload.data;
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	articles
});

export default rootReducer;