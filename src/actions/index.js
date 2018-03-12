import { update } from 'novux';
import { ENDPOINTS } from '../constants';
import { get } from './api';

export const getUsers = ({ endpoint } = {}) => (dispatch) => {
	get({ endpoint, dispatch })
		.then((body) => {
			dispatch(update('cache', 'Cache response body', {
				[endpoint]: body,
			}));
		});
};

export const addUser = ({ endpoint = ENDPOINTS.createUser } = {}) => (dispatch, getState) => {
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
