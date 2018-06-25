import React, { Component } from 'react';
import RelayPropTypes from 'react-relay/lib/RelayPropTypes';

import AuthForm from '../../components/AuthForm';
import loginMutation from '../../mutations/login';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = { error: '' };
  }

  static contextTypes = {
    relay: RelayPropTypes.Relay,
  };

  onSubmit({ email, password }) {
    loginMutation.commit(this.context.relay.environment, email, password)
      .catch((err) => {
        console.log(err);
        this.setState({ error: err.message });
      });
  }

  render() {
    return (
      <div>
        <AuthForm
          error={this.state.error}
          onSubmit={this.onSubmit.bind(this)}
        />
      </div>
    );
  }
}

export default LoginForm;
