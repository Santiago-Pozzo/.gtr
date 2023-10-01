import React from 'react'
import { ImputBoxStyled, ImputLabelStyled, ImputWrapperStyled } from './InputsStyles'


const MessageInput = ({children}, ...rest) => {
    return (
        <ImputWrapperStyled>
          <ImputLabelStyled htmlFor={children}>
           {children} :
          </ImputLabelStyled>  

          {/* usar elemento TextArea (en ves de type=text), repasar clase de formik 3.15, min23:50 
              pasar name por props
          */}
          <ImputBoxStyled 
            type="text" 
            name={children} 
            id={children} 
            className='message'
            {...rest}/
          >
    
          <span className='hidden'>Mensaje de error</span>
        </ImputWrapperStyled>
    ) 
}

export default MessageInput
