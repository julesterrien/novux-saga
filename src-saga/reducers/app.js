import { IS_FETCHING } from '../actionTypes';

export default (state = {}, action) => {
	switch (action.type) {
		case IS_FETCHING: {
			return {
				...state,
				isFetching: action.isFetching,
			};
		}
		default:
			return state;
	}
};
