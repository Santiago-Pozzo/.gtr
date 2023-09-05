import React from 'react'
import { CardProductStyled, ProducsWraperStyled, ProductsBoxStyled, CardImg, CardBottomBox,CardCategory, CardBrand, CardModel, CardDescription, CardInfoBox, ButtonBoxStyled } from './ProductsStyles'
import  { ButtonStyled }  from '../Button/ButtonStyles'


const ProductCard = ({ id, cat, brand, model, description, img, price }) => {
  return (
    <CardProductStyled>
      <CardCategory>{cat}</CardCategory>                           
      <CardImg> 
        <img src={img} alt={model} />
      </CardImg>
                                
      <CardInfoBox>
        <CardBrand>{brand}</CardBrand>
        <CardModel>{model}</CardModel>
        <CardDescription>{description}</CardDescription>

        <CardBottomBox>
          <p>${price}</p>
          <ButtonStyled whileTap={{scale: 0.95}}>
              Agregar
          </ButtonStyled>
        </CardBottomBox>
      </CardInfoBox>
    </CardProductStyled>
  )
}

export default ProductCard
