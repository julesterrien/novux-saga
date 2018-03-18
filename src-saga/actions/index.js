import { USERS_FETCH_REQUESTED, USERS_FETCH_SUCCEEDED, USER_CREATE_REQUESTED, IS_FETCHING } from '../actionTypes';

export const getUsers = () => ({ type: USERS_FETCH_REQUESTED });
export const saveUsers = users => ({ type: USERS_FETCH_SUCCEEDED, users });
export const addUser = users => ({ type: USER_CREATE_REQUESTED, users });
export const isFetching = bool => ({ type: IS_FETCHING, isFetching: bool });
