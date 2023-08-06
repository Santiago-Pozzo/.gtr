import React from 'react'
import { NavbarContainerStyled, NabvarLogoContainerStyled,NavbarMenuLabelContainerStyled, NavbarLinksContainerStyled, NavbarLinkStyled, NavbarCartLabelContainerStyled, NavbarLabelsBoxStyled, NavbarLinkIconStyled } from "./NavbarStyles"

import {GiHamburgerMenu, GiGuitarBassHead} from "react-icons/gi"
import {BiSolidHome} from "react-icons/bi"
import {FaUserPlus, FaShoppingCart} from "react-icons/fa"

import {motion} from "framer-motion"

import  Logo  from '../../assets/images/logogtr.png'

const Navbar = () => {
  return (
    <NavbarContainerStyled> 

      <a href="/#">
        <NabvarLogoContainerStyled src={Logo} alt="Logo"/>
      </a>

      <NavbarLinksContainerStyled> 
        <NavbarLinkStyled href="/#">
         <motion.div whileTap={{scale:0.95}}>
            <NavbarLinkIconStyled>
              <BiSolidHome/>
            </NavbarLinkIconStyled>    
            Home    
          </motion.div>
        </NavbarLinkStyled>

        <NavbarLinkStyled href="/#">
          <motion.div whileTap={{scale:0.95}}>
            <NavbarLinkIconStyled>
              <GiGuitarBassHead/>
            </NavbarLinkIconStyled>           
            Productos 
          </motion.div>            
        </NavbarLinkStyled>

        <NavbarLinkStyled href="/#">
          <motion.div whileTap={{scale:0.95}}>
            <NavbarLinkIconStyled> 
              <FaUserPlus/>      
            </NavbarLinkIconStyled>             
            Iniciar Sesión 
          </motion.div>          
        </NavbarLinkStyled>          
      </NavbarLinksContainerStyled>

      <NavbarLabelsBoxStyled>
        <motion.div whileTap={{scale:0.95}}>
          <NavbarMenuLabelContainerStyled>
            <GiHamburgerMenu/>
          </NavbarMenuLabelContainerStyled>
        </motion.div>

        <motion.div whileTap={{scale:0.95}}>
          <NavbarCartLabelContainerStyled>
            <FaShoppingCart/>
          </NavbarCartLabelContainerStyled>
        </motion.div>   
      </NavbarLabelsBoxStyled>
         
    </NavbarContainerStyled>
  )
}

export default Navbar
