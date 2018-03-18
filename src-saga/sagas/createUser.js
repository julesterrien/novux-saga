import { call, put, takeEvery, select } from 'redux-saga/effects';
import Api from '../api';
import { isFetching, saveUsers } from '../actions';
import { USER_CREATE_REQUESTED, USER_CREATE_FAILED } from '../actionTypes';
import { selectUsers } from '../selectors';

export function* createUser() {
	try {
		yield put(isFetching(true));
		const user = yield call(Api.addUser);
		yield put(isFetching(false));
		const currentUsers = yield select(selectUsers);
		const users = [...currentUsers, user];
		yield put(saveUsers(users));
	} catch (e) {
		yield put({ type: USER_CREATE_FAILED, message: e.message });
	}
}

export default [
	takeEvery(USER_CREATE_REQUESTED, createUser),
];
