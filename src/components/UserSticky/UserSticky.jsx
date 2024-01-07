import React, { useRef } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { StickyContainerStyled, StickyStyled, VerifyUserLinkStyled } from "./UserStickyStyles";
import {TbLogout} from "react-icons/tb"
import { setCurrentUser, toggleOpenSticky, toggleSticky } from '../../Redux/User/UserSlice';
import { LuUser } from "react-icons/lu"
import { IoMdAlert } from "react-icons/io";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew} from "react-icons/md"
import { setModalTitle, setModalMsg, setModalAction, toggleModal} from '../../Redux/AlertModal/ModalSlice';
import { clearCart } from '../../Redux/Cart/CartSlice';
import { Link } from 'react-router-dom';


const UserSticky = () => {
  const { currentUser, stickyOpen } = useSelector(state => state.user)
  const dispatch = useDispatch();
  const verified = currentUser.verificado

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
              className='icon' 
              onClick={()=>dispatch(toggleOpenSticky())}
            />
          ) : (
            <MdOutlineArrowBackIosNew 
              onClick={()=>dispatch(toggleOpenSticky())}
            />
          )
        }

        {
          !verified && (
            <IoMdAlert 
              className='alert'
            />
          )
        }

        <LuUser
          className='userIcon'
        />
              
        {
          stickyOpen && (
            <>
            <StickyContainerStyled>
              <h3>{currentUser? currentUser.nombre :""}</h3>

              {
                !verified && (
                  <>
                    <Link 
                    className='link'
                    to="/validate" >
                      <VerifyUserLinkStyled
                      className={ verified? hidden :""}
                      >
                        Validar usuario
                      </VerifyUserLinkStyled> 
                    </Link>
                  </>
                )
              }
              
            </StickyContainerStyled>   

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

      </StickyStyled>    
    )}
  </>
  )
}

export default UserSticky
