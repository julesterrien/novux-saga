/* eslint-env jest */

import { call, put } from 'redux-saga/effects';
import Api from '../api';
import { isFetching, saveUsers } from '../actions';
import { fetchUsers } from './fetchUsers';

jest.mock('../api/api');

describe('SAGAS :: fetchUsers', () => {
  it('make the api call and update isFetching state', () => {
    const gen = fetchUsers();
    expect(gen.next().value).toEqual(put(isFetching(true)));
    expect(gen.next().value).toEqual(call(Api.fetchUsers));
    expect(gen.next().value).toEqual(put(isFetching(false)));
  });

  it('save new users to state', () => {
    const gen = fetchUsers();
    gen.next(); // isFetching = true
    gen.next(); // makes api call
    const users = ['jack', 'john'];
    gen.next(users); // isFetching = false
    expect(gen.next(users).value).toEqual(put(saveUsers([...users])));
  });
});
