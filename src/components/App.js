import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, bool, string } from 'prop-types';
import { getUsers, addUser } from '../actions';
import Loader from './Loader';
import Users from './Users';

import './App.css';

class App extends Component {
	componentDidMount() {
		this.props.onMount();
	}
	render() {
		const { onClick, isFetching, error } = this.props;

		if (error) return <div>{error}</div>;

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
	error: string,
};

App.defaultProps = {
	isFetching: false,
	error: '',
};

const mapState = state => ({
	isFetching: state.app.isFetching || false,
	error: state.app.error,
});

const mapDispatch = dispatch => ({
	dispatch,
	onMount() {
		dispatch(getUsers());
	},
});

const mergeProps = ({ isFetching }, { dispatch, onMount }) => ({
	isFetching,
	onMount,
	onClick() {
		if (!isFetching) {
			dispatch(addUser());
		}
	},
});

export default connect(mapState, mapDispatch, mergeProps)(App);
