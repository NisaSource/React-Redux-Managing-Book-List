import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './common/Header';
import PageNotFound from './common/PageNotFound';
import BookPage from './books/BookPage';
import ManageBook from './books/ManageBook'; // eslint-disable-line import/no-named-as-default
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<div className="container">
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/about" component={AboutPage} />
				<Route path="/books" component={BookPage} />
				<Route path="/book/:slug" component={ManageBook} />
				<Route path="/book" component={ManageBook} />
				<Route component={PageNotFound} />
			</Switch>
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</div>
	);
}

export default App;
