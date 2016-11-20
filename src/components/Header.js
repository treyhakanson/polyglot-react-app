import React, { Component } from 'react';

export default class Header extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div className="header-wrapper">
				<div className="header-overlay">
					<img src={require('images/polyglot_outline.png')} alt="" className="header-img"/>
					<h1 className="header-text">Polyglot</h1>
				</div>
			</div>
		);
	}
}
