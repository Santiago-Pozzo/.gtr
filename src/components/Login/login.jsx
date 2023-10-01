import React from 'react'
import { LinkStyled, LoginWrapperStyled } from './loginStyles'
import Form from "../Forms/Form"
import TextInput from '../TextInputs/TextInputs'
import { Formik } from 'formik'
import { registerValidationEsch } from '../../Formik/FormValidations'


const Login = () => {
  return (
    <LoginWrapperStyled>
      <h2>Iniciá sesión</h2>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}

        validationSchema={registerValidationEsch}

        onSubmit= {(values, {resetForm}) => {
          console.log(values);
          resetForm();
        }}
      >

        {
          ({touched, errors}) => (
            <Form
              btnText= "Ingresar"
            >
              <TextInput 
                type="email"
                name="email"
                error= {errors.email && touched.email}
              >
                  Email
              </TextInput>

              <TextInput
                type="password"
                name="password"
                error= {errors.password && touched.password}
              >
                  Contraseña
              </TextInput>
            </Form>
          )
        }
      </Formik>

      <p>
        ¿No tenés usuario? 
        <br/>
        <span><LinkStyled to="/register">Registrate</LinkStyled></span>
      </p>
    </LoginWrapperStyled>
  )
}

export default Login
