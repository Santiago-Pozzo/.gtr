import React from 'react'
import { CartBtnBoxStyled, CartWrapperStyled, ProductBoxStyled, TotalBoxStyled } from './CartStyles'
import CartProduct from './CartProduct'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'

const Cart = () => {
  return (
    <CartWrapperStyled
     //className='active'
    >
      <ProductBoxStyled>
        <CartProduct/>
        <CartProduct/>
        <CartProduct/>
        <CartProduct/>
        <CartProduct/>
        <CartProduct/>
      </ProductBoxStyled>

      <TotalBoxStyled>
        <h2>Total:</h2>
        <h3>$15035431</h3>
      </TotalBoxStyled>

      <CartBtnBoxStyled>
        <Button> Comprar </Button>
        <Button> Vaciar </Button>
      </CartBtnBoxStyled>
    </CartWrapperStyled>
  )
}

export default Cart
