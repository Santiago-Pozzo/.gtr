import React from 'react'
import { ImputBoxStyled, ImputLabelStyled, ImputWrapperStyled } from './InputsStyles'
import { ErrorMessage, Field } from 'formik'

const TextInput = ({children, type, name, error}) => {


  return (
    <ImputWrapperStyled>
      <ImputLabelStyled 
        htmlFor={children}
      >
       {children} :
      </ImputLabelStyled>  

      <Field 
        type={type} 
        name={name} 
        id={children} 
        className= {error? "error" : ""}
        as={ImputBoxStyled}
      />
     
      <span> <ErrorMessage name={name}/> </span>
    </ImputWrapperStyled>
  )
}

export default TextInput
