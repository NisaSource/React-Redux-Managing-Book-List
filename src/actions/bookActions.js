import * as bookApi from '../api/bookApi';
import * as types from './actionTypes';
import { beginApiCall, apiCallError } from './apiStatusAction';

export function loadBooksSuccess(books) {
	return { type: types.LOAD_BOOKS_SUCCESS, books };
}

export function updateBookSuccess(book) {
	return { type: types.UPDATE_BOOK_SUCCESS, book };
}

export function addBookSuccess(book) {
	return { type: types.ADD_BOOK_SUCCESS, book };
}

export function removeBook(book) {
	return { type: types.REMOVE_BOOK, book };
}

export function loadBooks() {
	return function (dispatch) {
		dispatch(beginApiCall());
		return bookApi
			.getBooks()
			.then((books) => {
				dispatch(loadBooksSuccess(books));
			})
			.catch((err) => {
				dispatch(apiCallError(err));
				throw err;
			});
	};
}

export function saveBook(book) {
	return function (dispatch, getState) {
		dispatch(beginApiCall());
		return bookApi
			.saveBook(book)
			.then((savedBook) => {
				book.id
					? dispatch(updateBookSuccess(savedBook))
					: dispatch(addBookSuccess(savedBook));
			})
			.catch((err) => {
				dispatch(apiCallError(err));
				throw err;
			});
	};
}

export function deleteBook(book) {
	return function (dispatch) {
		// Doing optimistic delete, so not dispatching begin/end api call
		// actions, or apiCallError action since we're not showing the loading status for this.
		dispatch(removeBook(book));
		return bookApi.deleteBook(book.id);
	};
}
