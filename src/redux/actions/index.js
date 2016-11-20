import axios from 'axios';

export const getArticles = () => {
	const url = 'http://some-url.com';
	const promise = axios.get(url);

	return {
		action: 'GET_ARTICLES',
		payload: promise
	}
}