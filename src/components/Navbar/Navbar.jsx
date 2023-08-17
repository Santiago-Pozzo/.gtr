import React from 'react'
import { useContext } from 'react'
import { Context } from '../../Contexts/HeaderContext'

import { NavbarContainerStyled, NabvarLogoContainerStyled,NavbarMenuBtnStyled, NavbarLinksContainerStyled, NavbarLinkStyled, NavbarCartBtnStyled, NavbarLabelsBoxStyled, NavbarLinkIconStyled, Overlay } from "./NavbarStyles"

import {GiHamburgerMenu, GiGuitarBassHead} from "react-icons/gi"
import {BiSolidHome} from "react-icons/bi"
import {FaUserPlus, FaShoppingCart} from "react-icons/fa"
import {IoMdContacts} from "react-icons/io"
import {TbHandRock} from "react-icons/tb"

import {motion} from "framer-motion"

import  Logo  from '../../assets/images/logogtr.png'

const Navbar = () => {
  const { state, dispatch } = useContext(Context);


  return (
    <NavbarContainerStyled> 

      <a href="/#">
        <NabvarLogoContainerStyled src={Logo} alt="Logo"/>
      </a>

      <NavbarLinksContainerStyled
       className={state.isActive ? "active" : ""}
      > 
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
              <TbHandRock/>
            </NavbarLinkIconStyled>           
           ¿Qué es .GTR?  
          </motion.div>            
        </NavbarLinkStyled>

        <NavbarLinkStyled href="/#">
          <motion.div whileTap={{scale:0.95}}>
            <NavbarLinkIconStyled>
              <IoMdContacts/>
            </NavbarLinkIconStyled>           
           Contacto  
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
          <NavbarMenuBtnStyled
           onClick={ 
            () => dispatch({ type: "toggleMenu" })
          }
          >
            <GiHamburgerMenu/>
          </NavbarMenuBtnStyled>
        </motion.div>

        <motion.div whileTap={{scale:0.95}}>
          <NavbarCartBtnStyled>
            <FaShoppingCart/>
          </NavbarCartBtnStyled>
        </motion.div>   
      </NavbarLabelsBoxStyled>

      <Overlay
       className={
        state.isActive ? "active" : ""
       }
      />         
    </NavbarContainerStyled>
  )
}

export default Navbar
