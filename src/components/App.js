import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, bool } from 'prop-types';
import { getUsers, addUser } from '../actions';
import { ENDPOINTS } from '../constants';
import Loader from './Loader';
import Users from './Users';

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
});

const mapDispatch = dispatch => ({
	dispatch,
	onMount() {
		dispatch(getUsers({ endpoint: ENDPOINTS.getUsers }));
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
