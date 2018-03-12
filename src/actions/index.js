import { update } from 'novux';
import { chain } from 'redux-chain';
import { baseUrl, ENDPOINTS } from '../constants';

const getEndpoint = endpoint => ENDPOINTS[endpoint] || '';

export const getUsers = ({ endpoint }) => (dispatch) => {
	dispatch(update('app', 'Turn on isFetching', { isFetching: true }));

	const url = `${baseUrl}/${getEndpoint(endpoint)}`;

	// slow down request for test purposes
	fetch(url, { method: 'GET' })
		.then(res => res.json())
		.then((body) => {
			dispatch(
				chain(
					update('app', 'Turn off isFetching', { isFetching: false }),
					update('cache', 'Cache response body', {
						[endpoint]: body,
					})
				),
			);
		});
};

export const addUser = () => (dispatch, getState) => {
	dispatch(update('app', 'Turn on isFetching', { isFetching: true }));

	const url = `${baseUrl}/users/new`;

	// slow down request for test purposes
	fetch(url, { method: 'GET' })
		.then(res => res.json())
		.then((body) => {
			const { users } = getState().cache;
			dispatch(
				chain(
					update('app', 'Turn off isFetching', { isFetching: false }),
					update('cache', 'Cache response body', {
						users: [...users, body],
					})
				),
			);
		});
};
