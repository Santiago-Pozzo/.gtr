import React from 'react'
import { LinkStyled, LoginWrapperStyled } from './loginStyles'
import Form from "../Forms/Form"
import TextInput from '../TextInputs/TextInputs'
import { Formik } from 'formik'
import { loginValidationEsch } from '../../Formik/FormValidations'
import { loginInitialValues } from '../../Formik/InitialValues'
import { loginUser } from '../../axios/axiosUser'
import { useDispatch, useSelector } from 'react-redux'
import { openSticky, setCurrentUser, toggleSticky } from '../../Redux/User/UserSlice'
import useRedirect from '../../Hooks/useRerdirect'


const Login = () => {
  const dispatch = useDispatch();
  useRedirect("/");

  return (
    <LoginWrapperStyled>
      <h2>Iniciá sesión</h2>

      <Formik
        initialValues={loginInitialValues}

        validationSchema={loginValidationEsch}

        onSubmit= {async (values) => {

          const { user, token} = await loginUser(values.email, values.password);

          if (user) {
            dispatch(setCurrentUser({
              ...user,
              token: token
            }));

            dispatch(openSticky());
          }
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
