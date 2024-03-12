import React from 'react'
import Layout from './Layout'

import todoListPage from '../pages/todoListPage.mp4'
import todoListPageResponsive from '../pages/todoListPageResponsive.mp4'

import allPokemonD from '../pages/allPokemonD.png'
import allPokemonDResp from '../pages/allPokemonDResp.PNG'
import allPokemonW from '../pages/allPokemonW.png'
import allPokemonWResp from '../pages/allPokemonWResp.PNG'

import bestsellersM from '../pages/bestsellersM.PNG'
import bestsellers from '../pages/bestsellers.png'

import rickAndMorty from '../pages/rickAndMorty.png'
import rickAndMortyM from '../pages/rickAndMortyM.PNG'
import rickAndMortyModal from '../pages/rickAndMortyModal.png'
import rickAndMortyModalM from '../pages/rickAndMortyModalM.PNG'

import pokeApiLocationsM from '../pages/pokeApiLocationsM.PNG'
import pokeApiLocations from '../pages/pokeApiLocations.png'
import pokeApiM from '../pages/pokeApiM.PNG'
import pokeApi from '../pages/pokeApi.png'


function Pages({ data }) {
	return (
		<Layout>
			<h2>{data}</h2>
			<h3>To do list page</h3>
			<div className='todoListPage-container'>	
				<div className='todoListPage'>
					<video src={todoListPage} autoPlay loop muted/>
					<video src={todoListPageResponsive} autoPlay loop muted/>
				</div>
			</div>
			<h3>All Pokemon page</h3>
			<div className='allPokemonPage-container'>	
				<div className='allPokemonPageD'>
				 <img src={allPokemonDResp} alt="allPokemonDResp" /> 
				 <img src={allPokemonD} alt="allPokemonD" /> 
				</div>
				<div className='allPokemonPageW'>
					<img src={allPokemonWResp} alt="allPokemonWResp" /> 
					<img src={allPokemonW} alt="allPokemonW" />
				</div>
				<a href="https://azmvrk.github.io/react-vite-all-pokemon/">Go to this page !</a>
			</div>
			<h3>Pokémon App page</h3>
			<div className='allPokemonPage-container'>	
				<div className='allPokemonPageD'>
				 <img src={pokeApiLocationsM} alt="allPokemonDResp" /> 
				 <img src={pokeApiLocations} alt="allPokemonD" /> 
				</div>
				<div className='allPokemonPageW'>
					<img src={pokeApiM} alt="allPokemonWResp" /> 
					<img src={pokeApi} alt="allPokemonW" />
				</div>
				<a href="https://azmvrk.github.io/React-PokeApi/">Go to this page !</a>
			</div>
			<h3>New York Times bestsellers page</h3>
			<div className='bestsellers-container'>	
				<div className='bestsellers'>
				 <img src={bestsellersM} alt="bestsellersM" /> 
				 <img src={bestsellers} alt="bestsellers" /> 
				</div>
				<a href="https://azmvrk.github.io/final-exam-uibuild/">Go to this page !</a>
			</div>
			<h3>Rick and Morty page</h3>
			<div className='rickAndMorty-container'>	
				<div className='rickAndMorty'>
				 <img src={rickAndMortyM} alt="rickAndMortyM" /> 
				 <img src={rickAndMorty} alt="rickAndMorty" /> 
				</div>
				<div className='rickAndMortyModal'>
				 <img src={rickAndMortyModalM} alt="rickAndMortyModalM" /> 
				 <img src={rickAndMortyModal} alt="rickAndMortyModal" /> 
				</div>
				<a href="https://azmvrk.github.io/rick-and-morty/">Go to this page !</a>
			</div>
		</Layout>
	)
}

export default Pages