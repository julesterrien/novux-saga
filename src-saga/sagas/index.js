import { all } from 'redux-saga/effects';

import fetchUsers from './fetchUsers';
import createUser from './createUser';

export default function* watchAll() {
	yield all([
		...fetchUsers,
		...createUser,
	]);
}
