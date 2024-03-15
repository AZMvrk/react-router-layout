import React from 'react'
import Layout from './Layout'

import pixelartSelfieRound from '../gallery/pixelartSelfieRound.png'



function Home({ data }) {
	return (
		<Layout>
			<h2>Introduction</h2>
			<h3>Welcome, Dear Visitor!</h3>
			<div className='profile-container'>
				<div className='profile-picture-container'>
					<img className='profile-picture' src={pixelartSelfieRound} alt="pixelartSelfie" />
				</div>

				<div className='p-div'>
				<img className='profile-picture-mini' src={pixelartSelfieRound} alt="pixelartSelfie" />
					<p>I'm glad to welcome you on this site, where I can share my work and experiences in frontend development, graphics, and animation with you. I am Zoltán Márk Antal, an enthusiastic junior frontend developer with a creative mind who has always been drawn to the exciting possibilities of the digital world.</p>
				</div>
				<div className='p-div'>
					<img className='profile-picture-mini' src={pixelartSelfieRound} alt="pixelartSelfie" />
					<p>I created this site is to gather and show my previous works in one place, even if these projects and creations come from a little different fields, including frontend development, graphics and animation. Furthermore this site itself serves as a showcase of one of my best projects that I made by myself, and I really hope you will enjoy browsing through it!</p>
				</div>
				<div className='p-div'>
					<img className='profile-picture-mini' src={pixelartSelfieRound} alt="pixelartSelfie" />
					<p>It is important to me that the site is easy to navigate and that the content is easily accessible. On the "Pages" section, you will find websites I have created during and since my frontend developer course, while the "Gallery" showcases images from my previous graphic design commissions. This pages also contains works that i created in school, and there is the "Media" section, where you'll find some animated stuff.</p>
				</div>
				<div className='p-div'>
					<img className='profile-picture-mini' src={pixelartSelfieRound} alt="pixelartSelfie" />
					<p>I hope that browsing the site will inspire you or even give you the desire to collaborate. If you have any questions or feedback, please don't hesitate to contact me through one of my contacts.</p>
				</div>
			</div>
			
			
		</Layout>
	)
}

export default Home