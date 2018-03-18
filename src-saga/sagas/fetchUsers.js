import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../api';
import { isFetching, saveUsers } from '../actions';
import { USERS_FETCH_REQUESTED, USERS_FETCH_FAILED } from '../actionTypes';

export function* fetchUsers() {
	try {
		yield put(isFetching(true));
		const users = yield call(api.fetchUsers);
		yield put(isFetching(false));
		yield put(saveUsers(users));
	} catch (e) {
		yield put({ type: USERS_FETCH_FAILED, message: e.message });
	}
}

export default [
	takeEvery(USERS_FETCH_REQUESTED, fetchUsers),
];
