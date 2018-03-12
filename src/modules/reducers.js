import { createReducer } from 'novux';

const reducers = {
	app: createReducer('app', {}),
	cache: createReducer('cache', {}),
};

export default reducers;
