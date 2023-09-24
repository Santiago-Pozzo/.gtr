import React from 'react'
import { LinkStyled, LoginWrapperStyled } from './loginStyles'
import MailInput from "../TextInputs/MailInput"
import Form from "../Forms/Form"
import PassInpunt from '../TextInputs/PassInput'

const Login = () => {
  return (
    <LoginWrapperStyled>
      <h2>Iniciá sesión</h2>

      <Form
       btnText= "Ingresar"
      >
        <MailInput>
            Email
        </MailInput>

        <PassInpunt>
            Contraseña
        </PassInpunt>
      </Form>

      <p>
        ¿No tenés usuario? 
        <br/>
        <span><LinkStyled to="/register">Registrate</LinkStyled></span>
      </p>
    </LoginWrapperStyled>
  )
}

export default Login
