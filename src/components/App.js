import React, { Component } from 'react';

import Navbar from './Navbar.js';
import Header from './Header.js';
import Loader from './Loader.js';
import Body from './Body.js';
import Article from './Article.js';
import Footer from './Footer.js';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getArticles } from '../redux/actions';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { activeArticle: null };		
		this.changeArticleState = this.changeArticleState.bind(this);
	}

	componentDidMount() {
		this.props.getArticles();
	}

	changeArticleState(activeArticle) {
		console.log('hit with: ', activeArticle);
		this.setState({ activeArticle });
	}

	render() {
		const { articles } = this.props;

		if (articles.length === 0 ) {
			var contentToRender = <Loader />;
		} else if (!this.state.activeArticle) {
			var contentToRender = <Body callback={this.changeArticleState} data={articles} />;
		} else {
			var contentToRender = <Article callback={this.changeArticleState} url={this.state.activeArticle} />;
		}

		return (
			<div className="app-container">
				<Navbar />
				<Header />
				{contentToRender}
				<Footer />
			</div>
		);	
	}
}

function mapStateToProps({ articles }) {
	return { articles };
}

export default connect(mapStateToProps, { getArticles })(App);













