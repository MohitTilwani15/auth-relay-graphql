import React from 'react';
import { graphql } from 'relay-runtime';

export default [{
	path: '/login',
  components: () => [import('../../components/Header'), import('./LoginPage')],
  query: graphql`
		query LoginPageQuery {
			...Header
		}
	`,
	render: ([Header, LoginPage], data) => ({
		title: 'LoginPage',
	  component: (
			<div className="container">
			  <Header data={data} />
				<LoginPage />
			</div>
		),
		chunks: ['LoginPage'],
	}),
}];
