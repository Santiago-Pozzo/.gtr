import React from 'react'
import { FooterStyled, FooterLogoStyled, FooterNavListStyled, FooterList, FooterListLi } from "./FooterStyled"

import  Logo  from '../../assets/images/logogtr.png'

import { MdLocationPin } from "react-icons/md"
import { IoLogoWhatsapp, IoLogoFacebook } from "react-icons/io"
import { RiInstagramFill } from "react-icons/ri"
import { BiSolidHome } from "react-icons/bi"
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom'


const Footer = () => {
  const navigate = useNavigate();

  return (
    <FooterStyled>
        <FooterLogoStyled src={Logo} alt="Logo" />
        <FooterNavListStyled>
            <FooterList>
                <FooterListLi whileTap={{scale: 0.95}}>
                    <div><MdLocationPin/></div>                    
                    <span>Sucursales</span>
                </FooterListLi>

                <FooterListLi whileTap={{scale: 0.95}}>
                    <div><IoLogoWhatsapp/></div>  
                    <span>Whatsapp</span>
                </FooterListLi>

                <FooterListLi whileTap={{scale: 0.95}}>
                    <div><RiInstagramFill/></div>  
                    <span>Instagram</span>
                </FooterListLi>

                <FooterListLi whileTap={{scale: 0.95}}>
                    <div><IoLogoFacebook/></div>  
                    <span>Facebook</span>
                </FooterListLi>
            </FooterList>

            <FooterList>
                <NavLink to="/">
                    <FooterListLi whileTap={{scale: 0.95}}>
                        <div><BiSolidHome/></div>  
                        <span>Home</span>
                    </FooterListLi>
                </NavLink>

            </FooterList>
        </FooterNavListStyled>
    </FooterStyled>
  )
}

export default Footer
