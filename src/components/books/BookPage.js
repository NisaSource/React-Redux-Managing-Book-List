/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { FaPlus } from 'react-icons/fa';
import * as bookActions from '../../actions/bookActions';
import * as authorActions from '../../actions/authorActions';
import BookList from './BookList';
import Loader from '../common/Loader';

class BookPage extends React.Component {
	state = {
		redirectToAddBookPage: false,
	};

	componentDidMount() {
		const { books, authors, actions } = this.props;
		if (books.length === 0) {
			actions.loadBooks().catch((err) => {
				alert('Loading books failed' + err);
			});
		}

		if (authors.length === 0) {
			actions.loadAuthors().catch((err) => {
				alert('Loading authors failed' + err);
			});
		}
	}

	handleDeleteBook = async (book) => {
		toast.error('Book has been deleted!');
		try {
			await this.props.actions.removeBook(book);
		} catch (err) {
			toast.error('Failed to delete the book. ' + err.message, {
				autoClose: false,
			});
		}
	};

	render() {
		return (
			<>
				{this.state.redirectToAddBookPage && <Redirect to="/book" />}
				<h2>Books</h2>

				<Button
					style={{ marginBottom: 20 }}
					className="float-right"
					variant="info"
					onClick={() =>
						this.setState({
							redirectToAddBookPage: true,
						})
					}
				>
					<FaPlus />
				</Button>
				{this.props.loading ? (
					<Loader />
				) : (
					<BookList
						books={this.props.books}
						onDeleteClick={this.handleDeleteBook}
					/>
				)}
			</>
		);
	}
}

BookPage.propTypes = {
	books: PropTypes.array.isRequired,
	authors: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
	loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
	console.log('State ', state);
	return {
		books:
			state.authors.length === 0
				? []
				: state.books.map((book) => {
						return {
							...book,
							authorName: state.authors.find((a) => a.id === book.authorId)
								.name,
						};
				  }),
		authors: state.authors,
		loading: state.apiCallInProgress > 0,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: {
			loadBooks: bindActionCreators(bookActions.loadBooks, dispatch),
			loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
			removeBook: bindActionCreators(bookActions.removeBook, dispatch),
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);
