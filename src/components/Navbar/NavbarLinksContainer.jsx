import React from 'react'
import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Context } from '../../Contexts/HeaderContext'
import { NavbarLinksContainerStyled, NavbarLinkStyled,  NavbarLinkIconStyled} from './NavbarStyles'
import {motion} from "framer-motion"

//Import Icons---
import {GiGuitarBassHead} from "react-icons/gi"
import {BiSolidHome} from "react-icons/bi"
import {FaUserPlus} from "react-icons/fa"
import {IoMdContacts} from "react-icons/io"
import {TbHandRock} from "react-icons/tb"
import { closeOverlay } from '../../Redux/Overlay/OverlaySlice'
import { fetchProductsData } from '../../Redux/Products/productsFunctions'
import { getProducts } from '../../Redux/Products/ProductsSlice'
import { useNavigate } from 'react-router-dom'
import { getBrands } from '../../Redux/Categories/BrandsSlice'
//---------------

const NavbarLinksContainer = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useContext(Context);
    const dispatchRedux = useDispatch();
    const { activeSticky } = useSelector((state) => state.user)
    const stateProducts = useSelector((state)=>state.products)
    

    return (
    <NavbarLinksContainerStyled
      className={state.isActive ? "active" : ""}
    > 
     <NavbarLinkStyled 
       to="/"
       onClick={
         () => {
          dispatch({ type: "closeMenu" });
          dispatchRedux(closeOverlay());
        }
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
       to='/products'
       onClick={ async () => {
          if ( !stateProducts.loaded ) {
            const {
                apiProducts,
                apiProductsData,
                apiProductsDataOrderByBrand,
                TotalApiProducts
            } = await fetchProductsData();

            dispatchRedux(getProducts({
                products: apiProductsData,
                productsBybrand: apiProductsDataOrderByBrand,
                totalProducts: TotalApiProducts,
                api_prods: apiProducts,
            }));      

            dispatchRedux(getBrands(apiBrands));
          } 
          dispatch({ type: "closeMenu" });
          dispatchRedux(closeOverlay());  
        }
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
        () => {
         dispatch({ type: "closeMenu" });
         dispatchRedux(closeOverlay());
         }
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
        () => {
         dispatch({ type: "closeMenu" });
         dispatchRedux(closeOverlay());
         }
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
       className={activeSticky? "hidden" : ""} 
       to="/login"
       onClick={
        () => {
         dispatch({ type: "closeMenu" });
         dispatchRedux(closeOverlay());
         }
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
