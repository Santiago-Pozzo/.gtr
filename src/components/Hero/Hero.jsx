import React from 'react'
import { HeroContainerStyled, HeroImgContainer, HeroTextContainerStyled } from './HeroStyled'

const Hero = () => {

  return (
    <>
      <HeroContainerStyled>
        <HeroImgContainer/>
                  
        <HeroTextContainerStyled>
            <h1>¡Tu guitarra te está esperando! </h1>
            <p>Buscala en nuestra tienda y encontrá las mejores marcas con los mejores precios </p>

          
        </HeroTextContainerStyled>
      </HeroContainerStyled>
    </>

  )
}

export default Hero
