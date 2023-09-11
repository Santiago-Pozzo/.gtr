import React from 'react'
import { ModalStylded } from './ModalStyles'
import Button from '../Button/Button'
import { Overlay } from '../Navbar/NavbarStyles'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../../Redux/AlertModal/ModalSlice'

const Modal = () => {
  const dispatch = useDispatch();
  const className = useSelector((state)=>state.modal.active);
  const title = useSelector((state)=>state.modal.title);
  const msg = useSelector((state)=>state.modal.msg);
  const act = useSelector((state)=>state.modal.act);

console.log(act);

  return (
    <>
      <ModalStylded
       className={className? "active": ""}
      >
        <h2>{title}</h2>
        <p>{msg}</p>

        <div>
            <Button
             onClick={()=>dispatch(closeModal())}
            >Cancelar</Button>

            <Button
             onClick={()=>{
               dispatch(act());
               dispatch(closeModal())
              }
             }
            >Aceptar</Button>
        </div>
      </ModalStylded>

      <Overlay
        className={className}
      />
    </>
  )
}

export default Modal
