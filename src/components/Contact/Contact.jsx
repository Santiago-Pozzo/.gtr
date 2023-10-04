import React from 'react'
import { ContactTextBoxStyled, ContactWrapperStyled } from './ContacStyles'
import TextInput from '../TextInputs/TextInputs'
import Form from '../Forms/Form'
import MessageInput from '../TextInputs/MessageInput'
import { Formik } from 'formik'
import { contactValidationEsch } from '../../Formik/FormValidations'

const Contact = () => {
  return (
    <ContactWrapperStyled>
      <ContactTextBoxStyled>
        <h1>Contactate con nosotros</h1>
        <p>Para que podamos darte una atención personalizada dejanos tus datos así podremos comunicarnos con vos y responder la consulta que quieras hacernos.</p>
      </ContactTextBoxStyled>

      <Formik
        initialValues={{
          name: "",
          lastname: "",
          email: "",
          msg: "",
        }}

        validationSchema={contactValidationEsch}

        onSubmit= {(values, {resetForm}) => {
          console.log(values);
          resetForm();
        }}
      >

        {
          ({touched, errors}) => (
            <Form
            btnText= "Enviar"
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

              <MessageInput
                type="text"
                name="msg"
                error= {errors.msg && touched.msg}
              >
                Mensaje
              </MessageInput>
          </Form>  
          )
        }
        
      </Formik>



    </ContactWrapperStyled>
  )
}

export default Contact
