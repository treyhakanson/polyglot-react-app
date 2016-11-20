import React, { Component } from 'react';

import Navbar from './Navbar.js';
import Header from './Header.js';
import Body from './Body.js';
import Article from './Article.js';
import Footer from './Footer.js';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { activeArticle: null };		
		this.changeArticleState = this.changeArticleState.bind(this);
	}

	changeArticleState(activeArticle) {
		console.log('hit with: ', activeArticle);
		this.setState({ activeArticle });
	}

	render() {
		if (!this.state.activeArticle) {
			// TODO: update this with real data
			var tmp = [
				{ link: 'http://www.foxnews.com/transcript/2015/03/18/president-obama-liberal-legacy/' },
				{ link: 'http://www.foxnews.com/transcript/2015/03/18/president-obama-liberal-legacy/' },
				{ link: 'http://www.foxnews.com/transcript/2015/03/18/president-obama-liberal-legacy/' },
				{ link: 'http://www.foxnews.com/transcript/2015/03/18/president-obama-liberal-legacy/' },
				{ link: 'http://www.foxnews.com/transcript/2015/03/18/president-obama-liberal-legacy/' },
				{ link: 'http://www.foxnews.com/transcript/2015/03/18/president-obama-liberal-legacy/' },
			];
			var contentToRender = <Body callback={this.changeArticleState} data={tmp} />;
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

export default App;