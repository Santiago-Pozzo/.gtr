import React from 'react'
import { ContentContainerStyled, LayoutWrapper } from './LayoutStyles'
import NavBar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { MenuDespegable } from '../../Contexts/HeaderContext'

const Layout = ({children}) => {
  return (
    <LayoutWrapper>
      <MenuDespegable> 
          <NavBar/>
      </MenuDespegable>  

      <ContentContainerStyled>
        {children} 
      </ContentContainerStyled>

      <Footer/>         
    </LayoutWrapper>   
  )
}

export default Layout
