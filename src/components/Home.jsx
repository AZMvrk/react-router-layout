import React from 'react'
import Layout from './Layout'



function Home({ data }) {
	return (
		<Layout>
			<h2>{data}</h2>

			<h3>Zoltán Márk Antal</h3>
			<div className='profile-container'>
				<p>the content of home page</p>
			</div>
			

			<button className='pointless-button'>Pointless Button</button>
			
		</Layout>
	)
}

export default Home