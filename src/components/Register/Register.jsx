import React from 'react'

import TextInput from "../TextInputs/TextInputs"
import Form from "../Forms/Form"
import PassInpunt from '../TextInputs/PassInput'
import MailInput from "../TextInputs/MailInput"
import { RegisterWrapperStyled } from './RegisterStyles'

const Register = () => {
  return (
    <RegisterWrapperStyled>
      <h2>Creá tu usuario</h2>

        <Form
        btnText= "Registrarme"
        >
            <TextInput>
                Nombre
            </TextInput>

            <TextInput>
                Apellido
            </TextInput>

            <MailInput>
                Email
            </MailInput>

            <PassInpunt>
                Contraseña
            </PassInpunt>
        </Form>
    </RegisterWrapperStyled>
  )
}

export default Register
