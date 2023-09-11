import React from 'react'
import {useDispatch} from "react-redux"

import { CardProductStyled, ProducsWraperStyled, ProductsBoxStyled, CardImg, CardBottomBox,CardCategory, CardBrand, CardModel, CardDescription, CardInfoBox, ButtonBoxStyled } from './ProductsStyles'
import  { ButtonStyled }  from '../Button/ButtonStyles'
import { addToCart } from '../../Redux/Cart/CartSlice'


const ProductCard = ({ id, cat, brand, model, description, img, price }) => {

  const dispatch = useDispatch()
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
          <ButtonStyled 
           whileTap={{scale: 0.95}}
           onClick={()=>dispatch(addToCart({ id, cat, brand, model, description, img, price }))}
          >
              Agregar
          </ButtonStyled>
        </CardBottomBox>
      </CardInfoBox>
    </CardProductStyled>
  )
}

export default ProductCard
