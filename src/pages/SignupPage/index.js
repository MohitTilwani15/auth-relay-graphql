import React from 'react';
import { graphql } from 'relay-runtime';

export default [{
	path: '/signup',
  components: () => [import('../../components/Header'), import('./SignupPage')],
  query: graphql`
		query SignupPageQuery {
			...Header
		}
	`,
	render: ([Header, SignUpForm], data) => ({
		title: 'SignUpPage',
	  component: (
			<div className="container">
			  <Header data={data} />
				<SignUpForm />
			</div>
		),
		chunks: ['SignUpPage'],
	}),
}];
