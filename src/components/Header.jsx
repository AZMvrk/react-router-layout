import React from 'react'
import { Link } from 'react-router-dom'

import pixelartSelfie from '../gallery/pixelartSelfie.jpg'

function Header({ lang }) {
	return (
		<header>
			<img className='profile-picture' src={pixelartSelfie} alt="pixelartSelfie" />
			<Link to='/'>{ lang ? "Home" : "Kezdőlap" }</Link>
			<Link to='/about'>{ lang ? "Pages" : "Oldalak" }</Link>
			<Link to='/gallery'>{ lang ? "Gallery" : "Galéria" }</Link>
			<Link to='/media'>{ lang ? "Media" : "Média" }</Link>
		</header>
	)
}

export default Header