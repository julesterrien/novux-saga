/* eslint-env jest */

import deepFreeze from 'deep-freeze';
import appReducer from './cache';
import {
  USERS_FETCH_SUCCEEDED,
  USER_CREATE_SUCCEEDED,
  USERS_FETCH_FAILED,
  USER_CREATE_FAILED,
} from '../actionTypes';
import { ENDPOINTS } from '../constants';

describe('REDUCERS :: cache', () => {
  it('handles USERS_FETCH_SUCCEEDED', () => {
    const state = {};
    deepFreeze(state);
    const action = {
      type: USERS_FETCH_SUCCEEDED,
      users: ['john', 'jane'],
    };
    const newState = appReducer(state, action);
    expect(newState[ENDPOINTS.getUsers]).toEqual(
      expect.arrayContaining(['john', 'jane'])
    );
  });

  it('handles USERS_FETCH_FAILED', () => {
    const state = {};
    deepFreeze(state);
    const action = {
      type: USERS_FETCH_FAILED,
      message: 'Oops',
    };
    const newState = appReducer(state, action);
    expect(newState.error).toEqual('Oops');
  });

  it('handles USER_CREATE_SUCCEEDED', () => {
    const state = {};
    deepFreeze(state);
    const action = {
      type: USER_CREATE_SUCCEEDED,
      users: ['John', 'Jane'],
    };
    const newState = appReducer(state, action);
    expect(newState[ENDPOINTS.getUsers]).toEqual(
      expect.arrayContaining(['John', 'Jane'])
    );
  });

  it('handles USER_CREATE_FAILED', () => {
    const state = {};
    deepFreeze(state);
    const action = {
      type: USER_CREATE_FAILED,
      message: 'Oops',
    };
    const newState = appReducer(state, action);
    expect(newState.error).toEqual('Oops');
  });
});
