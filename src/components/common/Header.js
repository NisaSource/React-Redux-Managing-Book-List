import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FaHome } from 'react-icons/fa';

const Header = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Nav className="mr-auto">
					<Nav.Link className="navlink" href="/">
						<FaHome />
					</Nav.Link>
					<Nav.Link className="navlink" href="/books">
						Books
					</Nav.Link>
					<Nav.Link className="navlink" href="/about">
						About
					</Nav.Link>
				</Nav>
				<Form inline>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					<Button variant="outline-info">Search</Button>
				</Form>
			</Navbar>
		</>
	);
};

export default Header;
