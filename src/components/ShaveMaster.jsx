import React from 'react'
import Layout from './Layout'
import infinityLoadingWithFrame from '../media/infinityLoadingWithFrame.mp4'
import infinityLoading from '../media/infinityLoading.mp4'
import infinity from '../media/infinity.mp4'
import infinityStatic from '../media/infinityStatic.jpg'
import loadingRing from '../media/loadingRing.mp4'
import loadingRingScreen from '../media/loadingRingScreen.mp4'

function ShaveMaster() {
	return (
		<>
		<Layout>
		<h2>Animated loading screen</h2>
		<h3>Infinity Loading</h3>
		<div className='infinity-container'>	
			<div className='infinityStatic'>
				<img src={infinityStatic} alt="Infinity Static" />
			</div>
			<div className='infinity'>
				<video src={infinity} autoPlay loop muted/>
			</div>
			<div className='infinityLoading'>
				<video src={infinityLoading} autoPlay loop muted/>
			</div>
			<div className='infinityLoadingWithFrame'>
				<video src={infinityLoadingWithFrame} autoPlay loop muted/>
			</div>
		</div>
		<h2>Animated loading screen</h2>
		<h3>Loading Ring</h3>
		<div className='ring-container'>
			<div className='loadingRing'>
				<video src={loadingRing} autoPlay loop muted/>
			</div>
			<div className='loadingRingScreen'>
				<video src={loadingRingScreen} autoPlay loop muted/>
			</div>
		</div>
		</Layout>
		
		</>
	)
}

export default ShaveMaster