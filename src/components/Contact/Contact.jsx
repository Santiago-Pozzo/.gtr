import React from 'react'
import { ContactTextBoxStyled, ContactWrapperStyled } from './ContacStyles'
import TextInput from '../TextInputs/TextInputs'
import MailInput from '../TextInputs/MailInput'
import Form from '../Forms/Form'
import MessageInput from '../TextInputs/MessageInput'

const Contact = () => {
  return (
    <ContactWrapperStyled>
      <ContactTextBoxStyled>
        <h1>Contactate con nosotros</h1>
        <p>Para que podamos darte una atención personalizada dejanos tus datos así podremos comunicarnos con vos y responder la consulta que quieras hacernos.</p>
      </ContactTextBoxStyled>

      <Form
       btnText= "Enviar"
      >
        <TextInput>
            Nombre
        </TextInput>

        <TextInput>
            Apellido
        </TextInput>

        <MailInput/>

        <MessageInput>
            Mensaje
        </MessageInput>

       </Form>  

    </ContactWrapperStyled>
  )
}

export default Contact
