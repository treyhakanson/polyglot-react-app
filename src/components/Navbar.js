import React, { Component } from 'react';

import HamburgerIcon from 'react-icons/lib/md/menu';

export default class Navbar extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div className="navbar-menu">
				<HamburgerIcon size={30} color="white" />
			</div>
		);
	}
}