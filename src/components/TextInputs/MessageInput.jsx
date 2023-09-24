import React from 'react'
import { ImputBoxStyled, ImputLabelStyled, ImputWrapperStyled } from './InputsStyles'


const MessageInput = ({children}) => {
    return (
        <ImputWrapperStyled>
          <ImputLabelStyled htmlFor={children}>
           {children} :
          </ImputLabelStyled>  
    
          <ImputBoxStyled type="text" name={children} id={children} className='message'/>
    
          <span className='hidden'>Mensaje de error</span>
        </ImputWrapperStyled>
    ) 
}

export default MessageInput
