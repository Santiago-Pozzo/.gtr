import React, { useEffect } from 'react'
import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { closeOverlay, toggleOverlay } from '../../Redux/Overlay/OverlaySlice'
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
import { closeCart, toggleCart } from '../../Redux/Cart/CartSlice'
//---------------


const Navbar = () => {
  const overlayActive = useSelector((state)=>state.overlay.active)
  const { state, dispatch } = useContext(Context);
  const dispatchRedux = useDispatch();
  
  window.addEventListener("scroll", () => {
    dispatch({ type: "closeMenu" });
    dispatchRedux(closeCart());
    dispatchRedux(closeOverlay())
  });
  //window.addEventListener("resize", () => {dispatch({ type: "closeMenu" })});

  useEffect(()=>{
    dispatchRedux(closeCart());
  },[]);

  const totalCartProducts = useSelector((state)=> state.cart.cartItems).reduce((acc, item) => (acc += item.quantity), 0);

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
            () => {
              dispatch({ type: "toggleMenu" });
              dispatchRedux(toggleOverlay()); 
             }
           }
          >
            <GiHamburgerMenu/>
          </NavbarMenuBtnStyled>
        </motion.div>

        <motion.div whileTap={{scale:0.95}}>
          <NavbarCartBtnStyled
          onClick={ 
            () => {
              dispatchRedux(toggleCart());
              dispatchRedux(toggleOverlay())
             }
           }
          >
            <FaShoppingCart/>
            <span
             className={totalCartProducts > 0? "active" :" "}
            >{totalCartProducts}</span>
          </NavbarCartBtnStyled>
        </motion.div>   
      </NavbarLabelsBoxStyled>

      <Cart/>

      <Overlay
       className={overlayActive ? "active" : ""}
       onClick={
        () => {
          dispatch({ type: "closeMenu" });
          dispatchRedux(closeCart());
          dispatchRedux(toggleOverlay())
         }
       }
      />         
    </NavbarContainerStyled>
  )
}

export default Navbar
