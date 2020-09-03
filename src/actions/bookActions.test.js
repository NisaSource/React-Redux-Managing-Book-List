import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import * as bookActions from './bookActions';
import * as types from './actionTypes';
import { books } from '../../tools/mockData';

// Test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
	afterEach(() => {
		fetchMock.restore();
	});

	describe('Load Books Thunk', () => {
		it('should create BEGIN_API_CALL and LOAD_BOOKS_SUCCESS when loading books', () => {
			fetchMock.mock('*', {
				body: books,
				headers: { 'content-type': 'application/json' },
			});

			const expectedActions = [
				{ type: types.BEGIN_API_CALL },
				{ type: types.LOAD_BOOKS_SUCCESS, books },
			];

			const store = mockStore({ books: [] });
			return store.dispatch(bookActions.loadBooks()).then(() => {
				expect(store.getActions()).toEqual(expectedActions);
			});
		});
	});
});

describe('addBookSuccess', () => {
	it('should create a ADD_BOOK_SUCCESS action', () => {
		//arrange
		const book = books[0];
		const expectedAction = {
			type: types.ADD_BOOK_SUCCESS,
			book,
		};

		//act
		const action = bookActions.addBookSuccess(book);

		//assert
		expect(action).toEqual(expectedAction);
	});
});
