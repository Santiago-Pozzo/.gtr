import React from 'react'
import { ModalStylded } from './ModalStyles'
import Button from '../Button/Button'
import { Overlay } from '../Navbar/NavbarStyles'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../../Redux/AlertModal/ModalSlice'
import { clearCart } from '../../Redux/Cart/CartSlice'
import { modalAction } from './ModalFunctions'
import { current } from '@reduxjs/toolkit'
import { setCurrentUser } from '../../Redux/User/UserSlice'
import { postOrder } from '../../axios/axiosPostOrder'

const Modal = () => {
  const dispatch = useDispatch();
  const className = useSelector((state)=>state.modal.active);
  const title = useSelector((state)=>state.modal.title);
  const msg = useSelector((state)=>state.modal.msg);
  const act = useSelector((state)=>state.modal.act);
  const cartItems = useSelector((state)=>state.cart.cartItems);
  const cartTotal = useSelector((state)=>state.cart.total);
  const user = useSelector((state)=>state.user.currentUser);
  const modalAct = modalAction(act);

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
             onClick={ async ()=>{
                if( act === "postOrder") {
                  await postOrder( user.token, cartItems, cartTotal);
                  dispatch(closeModal());
                  dispatch(clearCart())                  
                }                
                  dispatch(modalAct())                  
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
