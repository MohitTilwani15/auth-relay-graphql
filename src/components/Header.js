import React, { Component } from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import RelayPropTypes from 'react-relay/lib/RelayPropTypes';
import Link from '../components/Link';
import logoutMutation from '../mutations/logout';

class Header extends Component {
  static contextTypes = {
    relay: RelayPropTypes.Relay,
  }

  onLogoutClick() {
    logoutMutation.commit(this.context.relay.environment);
  }

  renderButtons() {
    if (this.props.data.user) {
      return (
        <li>
          <a onClick={() => this.onLogoutClick()}>Logout</a>
        </li>
      );
    } else {
      return (
        <div>
          <li><Link href="/signup">Signup</Link></li>
          <li><Link href="/login">Login</Link></li>
        </div>
      );
    }
  }

  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link href="/">
             Home
          </Link>
          <ul className="right">
            {this.renderButtons()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default createFragmentContainer(
  Header,
  graphql`
    fragment Header on RootQueryType {
      user {
        id
        email
      }
    }
  `,
);
