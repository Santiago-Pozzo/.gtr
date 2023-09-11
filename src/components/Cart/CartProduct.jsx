import React from 'react'
import { CartControlsStyled, CartProductDescriptionStyled, CartProductImgStyled, CartProductPriceStyled, CartProductStyled, CartQuantityHandlerStyled, ProductInfoStyled } from './CartStyles'
import Button from "../Button/Button"
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart, removeItemUnit } from '../../Redux/Cart/CartSlice'
import { setModalAction, setModalMsg, setModalTitle, toggleModal } from '../../Redux/AlertModal/ModalSlice'


const CartProduct = ({id, brand, model, img, price, quantity }) => {
  const dispatch = useDispatch();

  return (
    <CartProductStyled>
      <ProductInfoStyled>
        <CartProductImgStyled>
            <img src={img} alt={brand+" "+model} />
        </CartProductImgStyled>

        <CartProductDescriptionStyled>
            <h2>{brand}</h2>
            <h3>{model}</h3>
            <p>${price}</p>
        </CartProductDescriptionStyled> 
      </ProductInfoStyled>

      <CartControlsStyled>
            <CartQuantityHandlerStyled>
                <Button
                 disabled = { quantity===1 }
                 onClick = {()=>{dispatch(removeItemUnit(id))}} 
                > - </Button>

                <p> {quantity} </p>

                <Button
                 onClick = {()=>{dispatch(addToCart({id, brand, model, img, price, quantity}))}} 
                > + </Button>
            </CartQuantityHandlerStyled>

            <CartProductPriceStyled> ${price*quantity} </CartProductPriceStyled>

            <Button
             onClick={()=>{dispatch(removeFromCart(id))}}
            >Quitar</Button>
        </CartControlsStyled>
    </CartProductStyled>
  )
}

export default CartProduct
