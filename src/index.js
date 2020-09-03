import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
//import 'font-awesome/css/font-awesome.min.css';

const store = configureStore();

render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('app')
);
