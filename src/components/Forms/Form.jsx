import React from 'react'
import { FormStyled } from './FormStyled'
import {ButtonStyled} from "../Button/ButtonStyles"

const Form = ({children}) => {
  return (
    <FormStyled>
      {children}

      <ButtonStyled>
            Enviar
      </ButtonStyled>
    </FormStyled>
  )
}

export default Form
