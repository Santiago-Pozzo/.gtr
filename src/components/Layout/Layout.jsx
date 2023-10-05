import React, { useEffect } from 'react'
import { ContentContainerStyled, LayoutWrapper } from './LayoutStyles'
import NavBar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { useContext } from 'react'
import {  Context } from '../../Contexts/HeaderContext'
import { useLocation } from 'react-router-dom'
import Modal from '../Modal/Modal'
import UserSticky from '../UserSticky/UserSticky'
import { useSelector } from 'react-redux'

const Layout = ({children}) => {
  const {state, dispatch} = useContext(Context);
  const activeSticky = useSelector((state)=>state.user.activeSticky)
  
  const { pathname } = useLocation();

  useEffect(()=>{
    window.scrollTo(0,0);
  }, [pathname])

  return (
    <LayoutWrapper>        
      <NavBar/>
      {
        activeSticky && (
         <UserSticky/>
        ) 
      }
      <Modal
       //className="active"
      />    
      <ContentContainerStyled>
        {children} 
      </ContentContainerStyled>

      <Footer/>         
    </LayoutWrapper>
  )
}

export default Layout
