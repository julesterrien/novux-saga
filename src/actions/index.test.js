/* eslint-env jest */

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getUsers, addUser } from './index';

const mockStore = configureMockStore([thunk]);

const mockResponse = (status, statusText, response) => {
  return new window.Response(response, {
    status,
    statusText,
    headers: {
      'Content-type': 'application/json'
    }
  });
};

const fetch = window.fetch;

describe('API', () => {
  afterEach(() => {
    window.fetch = fetch;
  });

  it('calls the getUsers endpoint', async () => {
    const store = mockStore({});
    const expected = { test: 'hi' };

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve(mockResponse(200, null, JSON.stringify(expected))));

    await store.dispatch(getUsers())
      .then(() => {
        const [isFetchingOn, isFetchingOff, saveResponse] = store.getActions();
        expect(isFetchingOn.state.isFetching).toBe(true);
        expect(isFetchingOff.state.isFetching).toBe(false);
        expect(saveResponse.state.users).toEqual(expect.objectContaining(expected));
      });
  });

  it('calls the getUsers endpoint', async () => {
    const initialUser = { name: 'Jane' };
    const expected = { name: 'Bob' };

    const store = mockStore({ cache: { users: [initialUser] } });
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve(mockResponse(200, null, JSON.stringify(expected))));

    await store.dispatch(addUser())
      .then(() => {
        const [isFetchingOn, isFetchingOff, saveResponse] = store.getActions();
        expect(isFetchingOn.state.isFetching).toBe(true);
        expect(isFetchingOff.state.isFetching).toBe(false);
        const [jane, bob] = saveResponse.state.users;
        expect(jane.name).toEqual(initialUser.name);
        expect(bob.name).toEqual(expected.name);
      });
  });
});
