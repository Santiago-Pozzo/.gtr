import React from 'react'
import { ImputBoxStyled, ImputLabelStyled, ImputWrapperStyled } from './InputsStyles'

const MailInput = () => {
  return (
    <ImputWrapperStyled>
      <ImputLabelStyled htmlFor="Email">
       Email :
      </ImputLabelStyled>  

      <ImputBoxStyled type="email" name="Email" id="Email" className='error'/>

      <span>Mensaje de error</span>
    </ImputWrapperStyled>    
  )
}

export default MailInput
