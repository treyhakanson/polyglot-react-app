import React, { Component } from 'react';

export default class NewCard extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return  (
			<div className="news-card-wrapper" onClick={this.props.onClick}>
				<img src="http://lorempixel.com/300/300" alt="" className="news-card-img"/>
				<div className="text-content">
					<p className="card-title">An Extremely Provacative News Title</p>
					<p className="card-description">A little bit of text that'll really get the people going because it's also provacative.</p>
					<p className="card-provider">CNN.com</p>
				</div>
			</div>
		);
	}
} 