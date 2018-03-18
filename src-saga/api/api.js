import { baseUrl } from '../constants';

export const get = ({ endpoint } = {}) => {
	return fetch(`${baseUrl}/${endpoint}`, { method: 'GET' })
		.then(res => res.json());
};
