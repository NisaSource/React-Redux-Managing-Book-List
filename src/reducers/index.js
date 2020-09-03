import { combineReducers } from 'redux';
import books from './bookReducers';
import authors from './authorReducer';
import apiCallInProgress from './apiStatusReducer';

const rootReducer = combineReducers({
	books,
	authors,
	apiCallInProgress,
});

export default rootReducer;
