import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import { FaReadme, FaTrash } from 'react-icons/fa';

const BookList = ({ books, onDeleteClick }) => (
	<Table responsive>
		<thead>
			<tr>
				<th>Title</th>
				<th>Author</th>
				<th>Category</th>
				<th />
			</tr>
		</thead>
		<tbody>
			{books.map((book) => {
				return (
					<tr key={book.id}>
						<td>
							<Link to={'/book/' + book.slug}>{book.title}</Link>
						</td>
						<td>{book.authorName}</td>
						<td>{book.category}</td>
						<td>
							<a
								className="btn btn-outline-info"
								href={'https://www.goodreads.com/book/show/' + book.slug}
							>
								<FaReadme />
							</a>
							<Button
								variant="outline-danger"
								className="float-right"
								onClick={() => onDeleteClick(book)}
							>
								<FaTrash />
							</Button>
						</td>
					</tr>
				);
			})}
		</tbody>
	</Table>
);

BookList.propTypes = {
	books: PropTypes.array.isRequired,
	onDeleteClick: PropTypes.func.isRequired,
};

export default BookList;
