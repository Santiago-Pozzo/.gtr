import React from 'react'
import { ButtonStyled } from '../Button/ButtonStyles'
import Featured from "../Featured/Featured"
import { useNavigate } from 'react-router-dom'
import Hero from '../Hero/Hero'
import { HomeWrapperStyled } from "./HomeStyles"

const Home = () => {
    const navigate = useNavigate();
  
    return (
    <HomeWrapperStyled>  
        <Hero/>

        <Featured/>

        <ButtonStyled 
            whileTap={{scale: 0.95}}
            onClick={()=> navigate("/products")}
            >Entrá a nuestra tienda
        </ButtonStyled>  
    </HomeWrapperStyled>
  )
}

export default Home
