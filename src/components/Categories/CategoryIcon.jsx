import React from 'react'

//Icons--------------
import { BiSolidGuitarAmp } from "react-icons/bi"
import { TbGuitarPickFilled } from "react-icons/tb"
import { GiGuitarBassHead, GiGuitarHead, GiMusicalNotes } from "react-icons/gi"
import { FaGuitar } from "react-icons/fa"
import { RiHardDrive3Fill } from "react-icons/ri"
import { AiFillTrademarkCircle } from "react-icons/ai"

const CategoryIcon = ( {iconName} ) => {
  
  const iconComponents = {
    BiSolidGuitarAmp,
    TbGuitarPickFilled,
    GiGuitarBassHead, 
    GiGuitarHead, 
    GiMusicalNotes,
    FaGuitar,
    RiHardDrive3Fill,
    AiFillTrademarkCircle
  }  

  const CategoryIconComponent = iconComponents[iconName]

  return (
    <CategoryIconComponent/>
  )
}

export default CategoryIcon
