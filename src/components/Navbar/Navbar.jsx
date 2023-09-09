import React from 'react'
import { useContext } from 'react'
import { Context } from '../../Contexts/HeaderContext'
import { NavbarContainerStyled, NabvarLogoContainerStyled,NavbarMenuBtnStyled, NavbarCartBtnStyled, NavbarLabelsBoxStyled, Overlay } from "./NavbarStyles"
import {motion} from "framer-motion"
import { NavLink } from 'react-router-dom'
import NavbarLinksContainer from "./NavbarLinksContainer"

//Import Icons---
import {GiHamburgerMenu} from "react-icons/gi"
import {FaShoppingCart} from "react-icons/fa"
import  Logo  from '../../assets/images/logogtr.png'
import Cart from '../Cart/Cart'
//---------------


const Navbar = () => {
  const { state, dispatch } = useContext(Context);

  window.addEventListener("scroll", () => {dispatch({ type: "closeMenu" })});
  //window.addEventListener("resize", () => {dispatch({ type: "closeMenu" })});

  return (
    <NavbarContainerStyled> 
      <NavLink to="/">
        <NabvarLogoContainerStyled src={Logo} alt="Logo"/>
      </NavLink>

      <NavbarLinksContainer/>

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

      <Cart/>

      <Overlay
       className={
        state.isActive ? "active" : ""
       }
       onClick={
        () => dispatch({ type: "toggleMenu" })
       }
      />         
    </NavbarContainerStyled>
  )
}

export default Navbar
