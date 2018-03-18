/* eslint-env jest */

import { call, put } from 'redux-saga/effects';
import Api from '../api';
import { isFetching, saveUsers } from '../actions';
import { createUser } from './createUser';

jest.mock('../api/api');

describe('SAGAS :: createUser', () => {
  it('make the api call and update isFetching state', () => {
    const gen = createUser();
    expect(gen.next().value).toEqual(put(isFetching(true)));
    expect(gen.next().value).toEqual(call(Api.addUser));
    expect(gen.next().value).toEqual(put(isFetching(false)));
  });

  it('save new users to state', () => {
    const gen = createUser();
    gen.next(); // isFetching = true
    gen.next(); // makes api call
    gen.next('jack'); // isFetching = false
    gen.next(); // selects users
    const users = ['john', 'jane'];
    expect(gen.next(users).value).toEqual(put(saveUsers([...users, 'jack'])));
  });
});
