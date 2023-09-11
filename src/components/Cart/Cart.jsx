import React, { useReducer } from 'react'
import { useDispatch, useSelector} from "react-redux"

import { CartBtnBoxStyled, CartWrapperStyled, ProductBoxStyled, TotalBoxStyled } from './CartStyles'
import CartProduct from './CartProduct'
import Button from '../Button/Button'
import { clearCart, closeCart } from "../../Redux/Cart/CartSlice"


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
        > Comprar </Button>

        <Button
         disabled = {!cartItems.length}
         onClick={()=>dispatch(clearCart())}
        > Vaciar </Button>
      </CartBtnBoxStyled>
    </CartWrapperStyled>
  )
}

export default Cart
