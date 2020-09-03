import React from 'react';
import { mount } from 'enzyme';
import { authors, newBook, books } from '../../../tools/mockData';
import { ManageBook } from './ManageBook';

function render(args) {
	const defaultProps = {
		authors,
		books,
		history: {},
		saveBook: jest.fn(),
		loadAuthors: jest.fn(),
		loadBooks: jest.fn(),
		book: newBook,
		match: {},
	};

	const props = { ...defaultProps, ...args };

	return mount(<ManageBook {...props} />);
}

it('sets error when attempting to save an empty title field', () => {
	const wrapper = render();
	wrapper.find('form').simulate('submit');
	const error = wrapper.find('.alert').first();
	expect(error.text()).toBe('Please fill the Title field');
});
