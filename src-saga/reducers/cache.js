import { USERS_FETCH_SUCCEEDED, USER_CREATE_SUCCEEDED, USERS_FETCH_FAILED, USER_CREATE_FAILED } from '../actionTypes';
import { ENDPOINTS } from '../constants';

export default (state = {}, action) => {
	switch (action.type) {
		case USERS_FETCH_SUCCEEDED: {
			const { users } = action;
			return {
				...state,
				[ENDPOINTS.getUsers]: users,
			};
		}
		case USERS_FETCH_FAILED: {
			const { message } = action;
			return {
				...state,
				error: message,
			};
		}
		case USER_CREATE_SUCCEEDED: {
			const { users } = action;
			return {
				...state,
				[ENDPOINTS.getUsers]: users,
			};
		}
		case USER_CREATE_FAILED: {
			const { message } = action;
			return {
				...state,
				error: message,
			};
		}
		default:
			return state;
	}
};
