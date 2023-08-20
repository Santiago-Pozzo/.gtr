import React from 'react'
import { ContentContainerStyled, LayoutWrapper } from './LayoutStyles'
import NavBar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { useContext } from 'react'
import {  Context } from '../../Contexts/HeaderContext'

const Layout = ({children}) => {
  const {state, dispatch} = useContext(Context) 

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
