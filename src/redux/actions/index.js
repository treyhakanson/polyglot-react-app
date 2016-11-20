import axios from 'axios';

export const getArticles = () => {
	const url = 'http://172.20.10.2/articles';
	const promise = axios.get(url);

	return {
		type: 'GET_ARTICLES',
		payload: promise
	}

}