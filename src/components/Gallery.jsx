import React from 'react'
import Layout from './Layout'

import kellemes from '../gallery/kellemes.jpg'
import slimShake from '../gallery/slimShake.png'
import collagen from '../gallery/collagen.png'
import present from '../gallery/present.png'
import flyer from '../gallery/flyer.jpg'
import collagen2 from '../gallery/collagen2.png'

import advertisement from '../gallery/advertisement.jpg'

import napfenyfotoLogo from '../gallery/napfenyfotoLogo.png'
import NFSFullneonBlack from '../gallery/NFSFullneonBlack.jpg'

import leopardGecko from '../gallery/leopardGecko.jpg'
import sitingSkeleton from '../gallery/sitingSkeleton.JPG'
import tay from '../gallery/tay.jpeg'
import DSC0201 from '../gallery/DSC0201.JPG'
import DSC0205 from '../gallery/DSC0205.JPG'


function Gallery({ data }) {
	return (
		<Layout>
			<h2>Commissions</h2>
			<h3>Posts</h3>
			<div className='posts-container'>
				<img src={kellemes} alt="kellemes" />
				<img src={collagen} alt="collagen" />
				<img src={slimShake} alt="slimShake" />
				<img src={present} alt="present" />
				<img src={flyer} alt="flyer" />
				<img src={collagen2} alt="collagen2" />
			</div>
			<h3>Photography & Advertisement</h3>
			<div className='advertisement-container'>
				<img src={advertisement} alt="advertisement" />
			</div>
			<h3>Logo & Business card</h3>
			<div className='businesscard-container'>
				<img src={napfenyfotoLogo} alt="napfenyfotoLogo" />
				<img src={NFSFullneonBlack} alt="NFSFullneonBlack" />
			</div>
			<h2>Hobby & School</h2>
			<h3>Drawing & Painting</h3>
			<div className='drawing-container'>
				<img src={leopardGecko} alt="leopardGecko" />
				<img src={DSC0205} alt="DSC0205" />
				<img src={tay} alt="tay" />
				<img src={DSC0201} alt="DSC0201" />
				<img src={sitingSkeleton} alt="sitingSkeleton" />
			</div>
		</Layout>
	)
}

export default Gallery