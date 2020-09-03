import * as authorApi from '../api/authorApi';
import * as types from './actionTypes';
import { beginApiCall, apiCallError } from './apiStatusAction';

export function loadAuthorsSuccess(authors) {
	return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
	return function (dispatch) {
		dispatch(beginApiCall());
		return authorApi
			.getAuthors()
			.then((authors) => {
				dispatch(loadAuthorsSuccess(authors));
			})
			.catch((err) => {
				dispatch(apiCallError(err));
				throw err;
			});
	};
}
