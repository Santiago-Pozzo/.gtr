import React, { useReducer } from 'react'
import { useDispatch, useSelector} from "react-redux"

import { CartBtnBoxStyled, CartWrapperStyled, ProductBoxStyled, TotalBoxStyled } from './CartStyles'
import CartProduct from './CartProduct'
import Button from '../Button/Button'
import { setModalAction, setModalMsg, setModalTitle, toggleModal } from '../../Redux/AlertModal/ModalSlice'


const Cart = () => {
  const cartItems = useSelector ((state)=>state.cart.cartItems)
  const activeCart = useSelector((state)=>state.cart.active);
  const dispatch = useDispatch();
  const total = cartItems.reduce((acc, item)=>{
    return (acc += item.price * item.quantity)
  }, 0)

   return (
    <CartWrapperStyled
     className={activeCart? "active" : ""}
    >
      <ProductBoxStyled>
        {
          cartItems.length? (
            cartItems.map((item)=>{
               return <CartProduct key={item.id} {...item}/>
              })   
          ) : (
             <p>No hay productos en el carrito</p>
          )
        }
      </ProductBoxStyled>

      <TotalBoxStyled
       className={cartItems.length? "active" : " "}
      >
        <h2>Total:</h2>
        <h3>${total}</h3>
      </TotalBoxStyled>

      <CartBtnBoxStyled>
        <Button
         disabled = {!cartItems.length}
         onClick = {
          ()=>{
            dispatch(setModalTitle("Finalizar compra"));
            dispatch(setModalMsg("Estás por comprar: "
            + cartItems.map((item)=>{
              return item.quantity + " " + item.brand + " " + item.model+ " "
            }) + "por un total de $" + total + "¿Deseas continuar?"))
            dispatch(setModalAction("clearCart"))  
            dispatch(toggleModal())          
          }
         }
        > Comprar </Button>

        <Button
         disabled = {!cartItems.length}
         onClick = {
          ()=>{
            dispatch(setModalTitle("Vaciar carrito"));
            dispatch(setModalMsg("¿Deseas borrar todos los productos del carrito?"))
            dispatch(setModalAction("clearCart"))  
            dispatch(toggleModal())          
          }
         }
        > Vaciar </Button>
      </CartBtnBoxStyled>
    </CartWrapperStyled>
  )
}

export default Cart
