/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { loadBooks, saveBook } from '../../actions/bookActions';
import { loadAuthors } from '../../actions/authorActions';
import BookForm from './BookForm';
import { newBook } from '../../../tools/mockData';
import Loader from '../common/Loader';

export function ManageBook({
	books,
	authors,
	loadAuthors,
	loadBooks,
	saveBook,
	history,
	...props
}) {
	const [book, setBook] = useState({ ...props.book });
	const [errors, setErrors] = useState({});
	const [saving, setSaving] = useState(false);

	useEffect(() => {
		if (books.length === 0) {
			loadBooks().catch((err) => {
				alert('Loading books failed' + err);
			});
		} else {
			setBook({ ...props.book });
		}

		if (authors.length === 0) {
			loadAuthors().catch((err) => {
				alert('Loading authors failed' + err);
			});
		}
	}, [props.book]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setBook((prevBook) => ({
			...prevBook,
			[name]: name === 'authorId' ? parseInt(value, 10) : value,
		}));
	};

	const validForm = () => {
		const { title, authorId, category } = book;
		const errors = {};

		if (!title) errors.title = 'Please fill the Title field';
		if (!authorId) errors.author = 'Please choose the author';
		if (!category) errors.category = 'Please fill the Category field';

		setErrors(errors);
		return Object.keys(errors).length === 0;
	};

	const handleSave = (e) => {
		e.preventDefault();
		if (!validForm()) return;
		setSaving(true);
		saveBook(book)
			.then(() => {
				toast('You just saved the book!', {
					position: 'top-right',
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				history.push('/books');
			})
			.catch((err) => {
				setSaving(false);
				setErrors({ onSave: err.message });
			});
	};

	return authors.length === 0 || books.length === 0 ? (
		<Loader />
	) : (
		<BookForm
			book={book}
			errors={errors}
			authors={authors}
			onChange={handleChange}
			onSave={handleSave}
			saving={saving}
		/>
	);
}

ManageBook.propTypes = {
	book: PropTypes.object.isRequired,
	books: PropTypes.array.isRequired,
	authors: PropTypes.array.isRequired,
	loadBooks: PropTypes.func.isRequired,
	loadAuthors: PropTypes.func.isRequired,
	saveBook: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired,
};

export const getBookBySlug = (books, slug) => {
	return books.find((book) => book.slug === slug) || null;
};

const mapStateToProps = (state, ownProps) => {
	const slug = ownProps.match.params.slug;
	const book =
		slug && state.books.length > 0 ? getBookBySlug(state.books, slug) : newBook;
	return {
		book,
		books: state.books,
		authors: state.authors,
	};
};

const mapDispatchToProps = {
	loadBooks,
	loadAuthors,
	saveBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageBook);
