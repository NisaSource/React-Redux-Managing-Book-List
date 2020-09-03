import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
	return (
		<>
			<div className="jumbotron">
				<h1>Book Collections</h1>
				<p>Manage your book!</p>
				<Link to="books" className="btn btn-primary btn-lg">
					View more
				</Link>
			</div>
		</>
	);
}

export default HomePage;
