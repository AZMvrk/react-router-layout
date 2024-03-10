import React from 'react'
import Layout from './Layout'

function About({ data }) {
	return (
		<Layout>
			<h2>{data}</h2>
		</Layout>
	)
}

export default About