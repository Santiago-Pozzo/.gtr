import React from 'react'
import { FormStyled } from './FormStyled'
import {ButtonStyled} from "../Button/ButtonStyles"

const Form = ({children, btnText}) => {
  return (
    <FormStyled>
      
      {children}

      <ButtonStyled>
            {btnText}
      </ButtonStyled>
    </FormStyled>
  )
}

export default Form
