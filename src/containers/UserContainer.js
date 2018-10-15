import React, { Component } from 'react';
import { connect } from 'react-redux';
import { User } from '../components/User';
import { handleLogin } from '../actions/UserActions';

class UserContainer extends Component {
  render() {
    const { user, handleLogin } = this.props;

    return (
      <User
        name={user.name}
        isFetching={user.isFetching}
        error={user.error}
        handleLogin={handleLogin}
      />
    );
  }
}

// attaching data from the store
const mapStateToProps = store => {
  return {
    user: store.user,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleLogin: () => dispatch(handleLogin()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);
