import React, { Component } from 'react';

import NewsCard from './NewsCard.js';

export default class Body extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		const { data, callback } = this.props;
		console.log(data);

		return (
			<div className="body-wrapper">
				{
					data.map((article, i) =>
						<NewsCard key={i} onClick={() => { callback(article.link) }} />)
				}
				<button className="load-more-btn">Load More...</button>
			</div>
		);
	}
}