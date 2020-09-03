import React from 'react';
import { Spinner } from 'react-bootstrap';
import './loader.css';

const Loader = () => {
	return <Spinner className="loader" animation="grow" variant="info" />;
};

export default Loader;
