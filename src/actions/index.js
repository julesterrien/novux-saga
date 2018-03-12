import { update } from 'novux';
import { ENDPOINTS } from '../constants';
import { get } from './api';

export const getUsers = () => (dispatch) => {
	const endpoint = ENDPOINTS.getUsers;
	get({ endpoint, dispatch })
		.then((body) => {
			dispatch(update('cache', 'Cache response body', {
				[endpoint]: body,
			}));
		});
};

export const addUser = () => (dispatch, getState) => {
	const endpoint = ENDPOINTS.createUser;
	get({ endpoint, dispatch })
		.then((body) => {
			const { users } = getState().cache;
			dispatch(
				update('cache', 'Cache response body', {
					users: [...users, body],
				}),
			);
		});
};
