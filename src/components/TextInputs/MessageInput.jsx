import React from 'react'
import { ImputBoxStyled, ImputLabelStyled, ImputWrapperStyled, MessageInputBoxStyled } from './InputsStyles'
import { ErrorMessage, Field } from 'formik'


const MessageInput = ({children, name, error, type}) => {
    return (
        <ImputWrapperStyled>
          <ImputLabelStyled htmlFor={children}>
           {children} :
          </ImputLabelStyled>  

          <Field 
            as={MessageInputBoxStyled}
            type={type} 
            name={name} 
            id={children} 
            className={error? "message error" :"message"}
            />
    
          <span><ErrorMessage name={name}/></span>
        </ImputWrapperStyled>
    ) 
}

export default MessageInput
