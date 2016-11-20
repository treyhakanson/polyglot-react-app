import React, { Component } from 'react';

export default class Footer extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div className="footer-wrapper">
				<img src={require('images/polyglot_outline.png')} alt="" className="footer-icon"/>
				<ul>
					<li>Overview</li>
					<li>What is Polyglot?</li>
					<li>About</li>
				</ul>
				<ul>
					<li>Contact Us</li>
					<li>FAQ</li>
				</ul>
			</div>
		);
	}
}
