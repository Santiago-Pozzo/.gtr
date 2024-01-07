import React, { useRef } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { StickyStyled } from "./UserStickyStyles";
import {TbLogout} from "react-icons/tb"
import { setCurrentUser, toggleOpenSticky, toggleSticky } from '../../Redux/User/UserSlice';
import { LuUser } from "react-icons/lu"
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew} from "react-icons/md"
import { setModalTitle, setModalMsg, setModalAction, toggleModal} from '../../Redux/AlertModal/ModalSlice';
import { clearCart } from '../../Redux/Cart/CartSlice';


const UserSticky = () => {
  const { currentUser, stickyOpen } = useSelector(state => state.user)
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setCurrentUser(null));
    dispatch(toggleSticky());
    dispatch(clearCart());
  }

      return (
        <>
        { currentUser && (
    <StickyStyled
      className={stickyOpen? "" :"closed"}
    >
      {
        stickyOpen ? (
          <MdOutlineArrowForwardIos 
            onClick={()=>dispatch(toggleOpenSticky())}
          />
        ) : (
          <MdOutlineArrowBackIosNew 
            onClick={()=>dispatch(toggleOpenSticky())}
          />
        )
      }

      <LuUser/>
            
      {
        stickyOpen && (
          <>
            <h3>{currentUser? currentUser.nombre :""}</h3>
            
            <button
              onClick={()=>{
                dispatch(setModalTitle("Cerrar sesión"));
                dispatch(setModalMsg("¿Deseas cerrar tu usuario?"))
                dispatch(setModalAction("logout"))  
                dispatch(toggleModal())                 
              }}      
            >
              <TbLogout/>
            </button>
          </>
        )
      }
      

    </StickyStyled>)}
    </>
  )
}

export default UserSticky
