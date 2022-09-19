import React from 'react'
import GridNews from '../GridNews'
import GridNewsBig from '../GridNewsBig'
import HeroHome from '../HeroHome'
import Testimony from '../Testimony'


const Home = () => {
  return (
    <div>
        <HeroHome/>
        <GridNews/> 
        <GridNewsBig/> 
        <Testimony/>   
    </div>
  )
}

export default Home