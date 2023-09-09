import React from 'react'
import { CartControlsStyled, CartProductDescriptionStyled, CartProductImgStyled, CartProductPriceStyled, CartProductStyled, CartQuantityHandlerStyled, ProductInfoStyled } from './CartStyles'
import Button from "../Button/Button"
const CartProduct = () => {
  return (
    <CartProductStyled>
      <ProductInfoStyled>
        <CartProductImgStyled>
            
        </CartProductImgStyled>

        <CartProductDescriptionStyled>
            <h2>Marca</h2>
            <h3>Modelo daskjadskjdsajads</h3>
            <p>$60000</p>
        </CartProductDescriptionStyled> 
      </ProductInfoStyled>

      <CartControlsStyled>
            <CartQuantityHandlerStyled>
                <Button> - </Button>
                <p> 2 </p>
                <Button> + </Button>
            </CartQuantityHandlerStyled>

            <CartProductPriceStyled> $120000 </CartProductPriceStyled>

            <Button>Quitar</Button>
        </CartControlsStyled>
    </CartProductStyled>
  )
}

export default CartProduct
