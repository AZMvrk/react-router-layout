import React from 'react'
import Layout from './Layout'

function Home({ data }) {
	return (
		<Layout>
			<h2>{data}</h2>

			<p>
				the content of home page
			</p>

			<button className='pointless-button'>Pointless Button</button>
		</Layout>
	)
}

export default Home