import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

it('contains 3 NavLinks via shallow', () => {
	const numLinks = shallow(<Header />).find('.navlink').length;
	expect(numLinks).toEqual(3);
});

it('contains 3 anchors via mount', () => {
	const numAnchors = mount(
		<MemoryRouter>
			<Header />
		</MemoryRouter>
	).find('a').length;

	expect(numAnchors).toEqual(3);
});
