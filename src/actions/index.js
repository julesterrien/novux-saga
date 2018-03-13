import { update } from 'novux';
import { ENDPOINTS } from '../constants';
import { get } from './api';

// these are thunks
// thunks are simply redux action creators which return a function instead of returning na object
// they can be used to handle async logic
// when the redux-thunk middleware is connected to the store (see ../modules/store),
// thunks have access to dipsatch fn and a getState fn which return the full redux state
// more here: https://github.com/gaearon/redux-thunk

// here, we use novux to make state changes
// novux is simply a reducer function which handles 2 cases: update & reset
// update & reset are simply action creators of type UPDATE and of type RESET
// - update adds data to the state object by spreading them
// - reset removes data from a state object, or returns the state to the reducer's initial state
// more here: https://github.com/neednova/novux

export const getUsers = () => (dispatch) => {
	const endpoint = ENDPOINTS.getUsers;
	get({ endpoint, dispatch })
		.then((body) => {
			// update works by:
			// - saying which reducer you want to target
			// - describing what you're doing with a short log
			// - providing a payload to spread
			// this will add body to state.cache[endpoint]
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
