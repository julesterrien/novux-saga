import React, { Component } from 'react';
import { connect } from 'react-redux';
import { update } from 'novux';
import { func, bool } from 'prop-types';
import { getData } from '../actions';
import Loader from './Loader';
import Users from './Users';
import { createSampleUser } from '../modules/utils';

import './App.css';

class App extends Component {
	componentDidMount() {
		this.props.onMount();
	}
	render() {
		const { onClick, isFetching } = this.props;
		return (
			<div className="app">
				<button onClick={onClick}>Add user</button>
				{
					isFetching ? (
						<Loader />
					) : (
						<Users />
					)
				}
			</div>
		);
	}
}

App.propTypes = {
	onMount: func.isRequired,
	onClick: func.isRequired,
	isFetching: bool.isRequired,
};

App.defaultProps = {
	isFetching: false,
};

const mapState = state => ({
	isFetching: state.app.isFetching || false,
	users: state.cache.users,
});

const mapDispatch = dispatch => ({
	dispatch,
	onMount() {
		dispatch(getData({ endpoint: 'users' }));
	},
});

const mergeProps = ({ isFetching, users }, { dispatch, onMount }) => ({
	isFetching,
	onMount,
	onClick() {
		if (!isFetching) {
			dispatch(update('cache', 'Add a user', {
				users: [...users, createSampleUser()],
			}));
		}
	},
});

export default connect(mapState, mapDispatch, mergeProps)(App);
