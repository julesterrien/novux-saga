import { update } from 'novux';
import { baseUrl } from '../constants';

export const get = ({ endpoint, dispatch } = {}) => {
	dispatch(update('app', 'Turn on isFetching', { isFetching: true }));

	return fetch(`${baseUrl}/${endpoint}`, { method: 'GET' })
		.then(res => res.json())
		.then((body) => {
			dispatch(update('app', 'Turn off isFetching', { isFetching: false }));
			return Promise.resolve(body);
		})
		.catch((error) => {
			dispatch('app', 'Show error', {
				isFetching: false,
				error: error.message,
			});
		});
};
