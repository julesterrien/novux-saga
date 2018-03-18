/* eslint-env jest */

import deepFreeze from 'deep-freeze';
import appReducer from './app';
import { IS_FETCHING } from '../actionTypes';

it('handles IS_FETCHING', () => {
  const state = {};
  deepFreeze(state);
  const action = {
    type: IS_FETCHING,
    isFetching: true,
  };
  const newState = appReducer(state, action);
  expect(newState.isFetching).toBe(true);
});
