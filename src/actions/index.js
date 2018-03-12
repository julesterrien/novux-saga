import { update } from 'novux';
import { chain } from 'redux-chain';
import { baseUrl, getEndpoint } from '../constants/api';

export const getData = ({ endpoint }) => (dispatch) => {
	dispatch(update('app', 'Turn on isFetching', { isFetching: true }));

	const url = `${baseUrl}/${getEndpoint(endpoint)}`;

	// slow down request for test purposes
	fetch(url, { method: 'GET' })
		.then(res => res.json())
		.then((body) => {
			dispatch(
				chain(
					update('app', 'Turn off isFetching', { isFetching: false }),
					update('cache', 'Save response body', {
						[endpoint]: body,
					})
				),
			);
		});
};
