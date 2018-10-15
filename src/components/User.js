import React from 'react';
import PropTypes from 'prop-types';

export class User extends React.Component {
  renderTemplate = () => {
    const { name, error, isFetching } = this.props;

    if (error) {
      return (
        <p>An error happend during login request. Refresh the page, please.</p>
      );
    }

    if (isFetching) {
      return <p>Loading…</p>;
    }

    if (name) {
      return <p>Hello, {name}!</p>;
    } else {
      return (
        <button className="btn" onClick={this.props.handleLogin}>
          Login
        </button>
      );
    }
  };

  render() {
    console.log('<User/> render');
    return <div className="ib user">{this.renderTemplate()}</div>;
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
};
