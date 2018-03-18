import { ENDPOINTS } from '../constants';
import { get } from './api';

export const fetchUsers = () => {
	const endpoint = ENDPOINTS.getUsers;
	return get({ endpoint });
};

export const addUser = () => {
	const endpoint = ENDPOINTS.createUser;
	return get({ endpoint });
};

export default {
	fetchUsers,
	addUser,
};
