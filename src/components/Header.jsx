import React from 'react'
import { Link } from 'react-router-dom'


function Header({ lang }) {
	return (
		<header className='header'>
			
			<Link to='/'>{ lang ? "Home" : "Kezdőlap" }</Link>
			<Link to='/pages'>{ lang ? "Pages" : "Oldalak" }</Link>
			<Link to='/gallery'>{ lang ? "Gallery" : "Galéria" }</Link>
			<Link to='/media'>{ lang ? "Media" : "Média" }</Link>
		</header>
	)
}

export default Header