import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { StickyStyled } from "./UserStickyStyles";
import {TbLogout} from "react-icons/tb"
import { setCurrentUser, toggleSticky } from '../../Redux/User/UserSlice';

const UserSticky = () => {
  const { currentUser, activeSticky } = useSelector(state => state.user)
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setCurrentUser(null));
    dispatch(toggleSticky());
  }
  return (
    <StickyStyled
     className={activeSticky? "" :"hidden"}
    >
      <h3>{currentUser? currentUser.nombre :""}</h3>

      <button
        onClick={()=>handleLogout()}      
      >
        <TbLogout/>
      </button>
    </StickyStyled>
  )
}

export default UserSticky
