import React from 'react'
import { Formik } from "formik"
import { registerValidationEsch } from "../../Formik/FormValidations"
import TextInput from "../TextInputs/TextInputs"
import Form from "../Forms/Form"
import { RegisterWrapperStyled } from './RegisterStyles'

const Register = () => {


  return (
    <RegisterWrapperStyled>
      <h2>Creá tu usuario</h2>

      <Formik
        initialValues={{
          name: "",
          lastname: "",
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
