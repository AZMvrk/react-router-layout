import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
	return (
		<header>
			<Link to='/'>home</Link>
			<Link to='/about'>about</Link>
			<Link to='/contact'>contact</Link>
			<Link to='/shavemaster'>SHAVEMASTER</Link>
		</header>
	)
}

export default Header