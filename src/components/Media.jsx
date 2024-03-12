import React from 'react'
import Layout from './Layout'
import infinityLoadingWithFrame from '../media/infinityLoadingWithFrame.mp4'
import infinityLoading from '../media/infinityLoading.mp4'
import infinity from '../media/infinity.mp4'
import infinityStatic from '../media/infinityStatic.jpg'
import loadingRing from '../media/loadingRing.mp4'
import loadingRingScreen from '../media/loadingRingScreen.mp4'
import bubble from '../media/bubble.mp4'
import bubbleWithFrame from '../media/bubbleWithFrame.mp4'
import bubbleWhite from '../media/bubbleWhite.mp4'
import bubbleWhiteFrame from '../media/bubbleWhiteFrame.mp4'
import menuBar from '../media/menuBar.mp4'


function Media() {
	return (
		<>
		<Layout>
		<h2>Animated loading screens</h2>
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
	
		<h3>Ring Loading</h3>
		<div className='ring-container'>
			<div className='loadingRing'>
				<video src={loadingRing} autoPlay loop muted/>
			</div>
			<div className='loadingRingScreen'>
				<video src={loadingRingScreen} autoPlay loop muted/>
			</div>
		</div>
		
		<h3>Bubble Loading</h3>
		<div className='bubble-container'>	
			<div className='bubbleWhite'>
				<video src={bubbleWhite} autoPlay loop muted/>
			</div>
			<div className='bubbleWhiteFrame'>
				<video src={bubbleWhiteFrame} autoPlay loop muted/>
			</div>
			<div className='bubble'>
				<video src={bubble} autoPlay loop muted/>
			</div>
			<div className='bubbleWithFrame'>
				<video src={bubbleWithFrame} autoPlay loop muted/>
			</div>
		</div>
		<h2>Animated menu bar</h2>
		<h3>Menu bar with icons</h3>
		<div className='menuBar-container'>	
			<div className='menuBar'>
				<video src={menuBar} autoPlay loop muted/>
			</div>
		</div>
		</Layout>
		
		</>
	)
}

export default Media