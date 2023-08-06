import React from 'react'
import { ButtonStyled } from './ButtonStyles'

const Button = ({
    children,
    radius = '16',
    disabled = false
}) => {
  return (
    <ButtonStyled 
      whileTap={{scale:0.95}}
      disabled={disabled}
      radius={radius}
    >
        {children}
    </ButtonStyled>
  )
}

export default Button
