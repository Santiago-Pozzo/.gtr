import React, { useEffect } from 'react'
import { ContentContainerStyled, LayoutWrapper } from './LayoutStyles'
import NavBar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { useContext } from 'react'
import {  Context } from '../../Contexts/HeaderContext'
import { useLocation } from 'react-router-dom'

const Layout = ({children}) => {
  const {state, dispatch} = useContext(Context);
  
  const { pathname } = useLocation();

  useEffect(()=>{
    window.scrollTo(0,0);
  }, [pathname])

  return (
    <LayoutWrapper>        
      <NavBar/>
          
      <ContentContainerStyled>
        {children} 
      </ContentContainerStyled>

      <Footer/>         
    </LayoutWrapper>
  )
}

export default Layout
