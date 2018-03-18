/* eslint-env jest */

import { get } from './api';
import { fetchUsers, addUser } from './index';
import { ENDPOINTS } from '../constants';

jest.mock('./api');

describe('API', () => {
  it('calls the getUsers endpoint', () => {
    fetchUsers();
    expect(get).toHaveBeenCalledWith({ endpoint: ENDPOINTS.getUsers });
  });

  it('calls the getUsers endpoint', () => {
    addUser();
    expect(get).toHaveBeenCalledWith({ endpoint: ENDPOINTS.createUser });
  });
});
