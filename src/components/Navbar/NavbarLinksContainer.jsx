import React from 'react'
import { useContext } from 'react'
import { Context } from '../../Contexts/HeaderContext'
import { NavbarLinksContainerStyled, NavbarLinkStyled,  NavbarLinkIconStyled} from './NavbarStyles'
import {motion} from "framer-motion"

//Import Icons---
import {GiGuitarBassHead} from "react-icons/gi"
import {BiSolidHome} from "react-icons/bi"
import {FaUserPlus} from "react-icons/fa"
import {IoMdContacts} from "react-icons/io"
import {TbHandRock} from "react-icons/tb"
//---------------

const NavbarLinksContainer = () => {
    const { state, dispatch } = useContext(Context);
  
    return (
    <NavbarLinksContainerStyled
      className={state.isActive ? "active" : ""}
    > 
     <NavbarLinkStyled 
       to="/"
       onClick={
         () => {dispatch({ type: "closeMenu" })}
       }
     >
      <motion.div whileTap={{scale:0.95}}>
         <NavbarLinkIconStyled>
           <BiSolidHome/>
         </NavbarLinkIconStyled>    
         Home   
       </motion.div>
     </NavbarLinkStyled>


     <NavbarLinkStyled 
       to="/products"
       onClick={
         () => {dispatch({ type: "closeMenu" })}
       }
     >
       <motion.div whileTap={{scale:0.95}}>
         <NavbarLinkIconStyled>
           <GiGuitarBassHead/>
         </NavbarLinkIconStyled>           
        Productos  
       </motion.div>            
     </NavbarLinkStyled>


     <NavbarLinkStyled 
       to="/about"
       onClick={
         () => {dispatch({ type: "closeMenu" })}
       }
     >
       <motion.div whileTap={{scale:0.95}}>
         <NavbarLinkIconStyled>
           <TbHandRock/>
         </NavbarLinkIconStyled>           
        ¿Qué es .GTR?  
       </motion.div>            
     </NavbarLinkStyled>



     <NavbarLinkStyled 
       to="/contact"
       onClick={
         () => {dispatch({ type: "closeMenu" })}
       }
     >
       <motion.div whileTap={{scale:0.95}}>
         <NavbarLinkIconStyled>
           <IoMdContacts/>
         </NavbarLinkIconStyled>           
        Contacto  
       </motion.div>            
     </NavbarLinkStyled>

     <NavbarLinkStyled 
       to="/login"
       onClick={
         () => {dispatch({ type: "closeMenu" })}
       } 
     >
       <motion.div whileTap={{scale:0.95}}>
         <NavbarLinkIconStyled> 
           <FaUserPlus/>      
         </NavbarLinkIconStyled>             
        Iniciar Sesión  
       </motion.div>          
     </NavbarLinkStyled>          
   </NavbarLinksContainerStyled>
  )
}

export default NavbarLinksContainer
