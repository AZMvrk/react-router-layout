import React from 'react'
import Layout from './Layout'

function About({ data }) {
	return (
		<Layout>
			{data}

			<p>content of about</p>
		</Layout>
	)
}

export default About