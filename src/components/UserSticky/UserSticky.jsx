import React, { useRef } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { StickyStyled } from "./UserStickyStyles";
import {TbLogout} from "react-icons/tb"
import { setCurrentUser, toggleOpenSticky, toggleSticky } from '../../Redux/User/UserSlice';
import { LuUser } from "react-icons/lu"
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew} from "react-icons/md"


const UserSticky = () => {
  const { currentUser, stickyOpen } = useSelector(state => state.user)
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setCurrentUser(null));
    dispatch(toggleSticky());
  }

      return (
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
              onClick={()=>handleLogout()}      
            >
              <TbLogout/>
            </button>
          </>
        )
      }
      

    </StickyStyled>
  )
}

export default UserSticky
