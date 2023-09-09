import React from 'react'
import { ModalStylded } from './ModalStyles'
import Button from '../Button/Button'
import { Overlay } from '../Navbar/NavbarStyles'

const Modal = () => {
  return (
    <>
      <ModalStylded
       // className='active'
      >
        <h2>Titulo de la alerta</h2>
        <p>Pregunta si estás seguro</p>

        <div>
            <Button>Cancelar</Button>
            <Button>Aceptar</Button>
        </div>
      </ModalStylded>

      <Overlay
        //className='active'
      />
    </>
  )
}

export default Modal
