import React from 'react'
import { ImputBoxStyled, ImputLabelStyled, ImputWrapperStyled } from './InputsStyles'
import { ErrorMessage, Field } from 'formik'


const MessageInput = ({children, name, error, type}) => {
    return (
        <ImputWrapperStyled>
          <ImputLabelStyled htmlFor={children}>
           {children} :
          </ImputLabelStyled>  

          {/* usar elemento TextArea (en ves de type=text), repasar clase de formik 3.15, min23:50 
              pasar name por props
          */}
          <Field 
            type={type} 
            name={name} 
            id={children} 
            className={error? "message error" :"message"}
            as={ImputBoxStyled}
          />
    
          <span><ErrorMessage name={name}/></span>
        </ImputWrapperStyled>
    ) 
}

export default MessageInput
