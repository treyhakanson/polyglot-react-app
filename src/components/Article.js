import React, { Component } from 'react';

import Loader from './Loader.js';
import Close from 'react-icons/lib/md/close';

export default class Article extends Component {
	constructor(props) {
		super(props);

		this.state = { loading: true };
	}

	componentDidMount() {
		var that = this;
		document.querySelector('iframe').onload = function() {
			that.setState({ loading: false });
			this.style.height = (window.innerHeight - 50) + 'px';
			document.querySelector('.header-wrapper').className += ' collapsed';
		};
	}

	render() {
		const { loading } = this.state;

		return (
			<div className="article-wrapper">
				<div className="back-btn"
					onClick={() => { 
						document.querySelector('.header-wrapper').className = 'header-wrapper';
						this.props.callback(null);
					}}>
					<Close size={30} color="white" />
				</div>
				<div className="article-content">
					{
						loading &&
							<Loader />
					}
					<iframe style={{ display: (loading) ? 'none' : 'block' }} src={this.props.url} frameBorder="0" />
				</div>
			</div>
		);
	}
}