import React from 'react';
import { connect } from 'react-redux';
import { array } from 'prop-types';

const Users = ({ users }) => (
	<div>
		{
			users.map(({ username, id }) => <div key={id}>{username}</div>)
		}
	</div>
);

Users.propTypes = {
	users: array,
};

Users.defaultProps = {
	users: [],
};

const mapState = state => ({
	users: [...state.cache.users || []],
});

export default connect(mapState)(Users);
