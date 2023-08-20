import React from 'react'
import { ErrorBoxStyled, ErrorWrapperStyled } from './ErrorStyles'
import { ButtonStyled } from '../Button/ButtonStyles'
import { IoIosArrowBack } from "react-icons/io"
import { useNavigate } from "react-router-dom"

const Error = () => {
  const navigate = useNavigate();
  return (
    <ErrorWrapperStyled>
      <ErrorBoxStyled>
        <h2>¡Error!</h2>
        <p>La página que buscas no está disponible</p>
        <ButtonStyled
         whileTap={{scale: 0.95}}
         onClick={() => navigate(-1)} 
        >
            <IoIosArrowBack/>
            <span>Volver</span>
        </ButtonStyled>
      </ErrorBoxStyled>
    </ErrorWrapperStyled>
  )
}

export default Error
