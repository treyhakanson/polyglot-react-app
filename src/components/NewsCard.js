import React, { Component } from 'react';

export default class NewCard extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		const { article } = this.props;
		return  (
			<div className="news-card-wrapper" onClick={this.props.onClick}>
				<img src="http://lorempixel.com/300/300" alt="" className="news-card-img"/>
				<div className="text-content">
					<p className="card-title">{article.title}</p>
					<p className="card-description">{article.snippet}</p>
					<p className="card-provider">{article.bias}</p>
				</div>
			</div>
		);
	}
} 