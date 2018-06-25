import React from 'react';
import { graphql } from 'relay-runtime';

export default [{
	path: '/',
	components: () => [import('../../components/Header'), import('./HomePage')],
	query: graphql`
		query HomePageQuery {
			...Header
		}
	`,
	render: ([Header, HomePage], data) => ({
		title: 'HomePage',
	  component: (
			<div className="container">
			  <Header data={data} />
				<HomePage data={data} />
			</div>
		),
		chunks: ['HomePage'],
	}),
}];
