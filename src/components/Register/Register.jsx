import React from 'react'
import { Formik } from "formik"
import { registerValidationEsch } from "../../Formik/FormValidations"
import TextInput from "../TextInputs/TextInputs"
import Form from "../Forms/Form"
import { RegisterWrapperStyled } from './RegisterStyles'
import { registerInitialValues } from '../../Formik/InitialValues'
import { createUsr } from '../../axios/axiosUser'
import { useDispatch } from "react-redux"
import { setCurrentUser, toggleSticky } from '../../Redux/User/UserSlice'
import useRedirect from '../../Hooks/useRerdirect'

const Register = () => {
  const dispatch = useDispatch();
  useRedirect("/");

  return (
    <RegisterWrapperStyled>
      <h2>Creá tu usuario</h2>

      <Formik
        initialValues={registerInitialValues}

        validationSchema={registerValidationEsch}

        onSubmit= { async (values, actions) => {
          
          const user = await createUsr (
            values.name,
            values.lastname,
            values.email,
            values.password
          );

          actions.resetForm();
            
          if (user) {
            dispatch((setCurrentUser({...user})));
            dispatch(toggleSticky());
          }

        }}
      >

        {
          ({touched, errors})=>(

            <Form
            btnText= "Registrarme"
            >
                <TextInput 
                  type="text"
                  name="name"
                  error= {errors.name && touched.name}
                >
                    Nombre
                </TextInput>

                <TextInput 
                  type="text"
                  name="lastname"
                  error= {errors.lastname && touched.lastname}
                >
                    Apellido
                </TextInput>

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
    </RegisterWrapperStyled>
  )
}

export default Register
