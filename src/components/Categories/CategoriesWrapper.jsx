import React from 'react'
import { CategoriesWrapperStyled, CategoryCardStyled } from './CategoriesWrapperStyles'
import CategoryCard from './CategoryCard'

import { BiSolidGuitarAmp } from "react-icons/bi"
import { TbGuitarPickFilled } from "react-icons/tb"
import { GiGuitarBassHead, GiGuitarHead } from "react-icons/gi"
import { FaGuitar } from "react-icons/fa"
import { RiHardDrive3Fill } from "react-icons/ri"



const CategoriesWrapper = () => {
  return (
    <CategoriesWrapperStyled>
        <CategoryCardStyled
        whileTap={{scale:0.95}}>
            <GiGuitarHead/>
            <h2>Eléctricas</h2>
        </CategoryCardStyled>

        <CategoryCardStyled
        whileTap={{scale:0.95}}>
            <FaGuitar/>
            <h2>Acústicas</h2>
        </CategoryCardStyled>

        <CategoryCardStyled
        whileTap={{scale:0.95}}>
            <GiGuitarBassHead />
            <h2>Bajos</h2>
        </CategoryCardStyled>

        <CategoryCardStyled
        whileTap={{scale:0.95}}>
            <BiSolidGuitarAmp/>
            <h2>Amplis</h2>
        </CategoryCardStyled>

        <CategoryCardStyled
        whileTap={{scale:0.95}}>
            <RiHardDrive3Fill/>
            <h2>Pedales</h2>
        </CategoryCardStyled>

        <CategoryCardStyled
        whileTap={{scale:0.95}}>
            <TbGuitarPickFilled/>
            <h2>Accesorios</h2>
        </CategoryCardStyled>
    </CategoriesWrapperStyled>
  )
}

export default CategoriesWrapper
