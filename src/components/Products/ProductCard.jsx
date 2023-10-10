import React from 'react'
import {useDispatch, useSelector} from "react-redux"

import { CardProductStyled,  CardImg, CardBottomBox,CardCategory, CardBrand, CardModel, CardDescription, CardInfoBox,  BottonMsgStyled, BottomSpanStyled, BottomPStyled } from './ProductsStyles'
import { addToCart } from '../../Redux/Cart/CartSlice'
import { LinkStyled } from '../Login/loginStyles'
import Button from '../Button/Button'
import { openFootModal, setSelectedProduct } from '../../Redux/FootModal/FootModalSlice'


const ProductCard = ({ id, cat, brand, model, description, img, price }) => {
  const currentUser = useSelector((state)=>state.user.currentUser)
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
          
          <Button
           disabled= {!currentUser}
           whileTap={{scale: 0.95}}
           onClick={()=>{
            dispatch(setSelectedProduct({ id, cat, brand, model, description, img, price }))
            dispatch(openFootModal())
           }}
          >
              Agregar
          </Button>

        </CardBottomBox>

        <BottonMsgStyled
          className={currentUser? "" :'active'}
        >
          <BottomSpanStyled>
            <LinkStyled to="/login"> Ingresá </LinkStyled>
          </BottomSpanStyled>
          <BottomPStyled> para agregar al carrito </BottomPStyled>
        </BottonMsgStyled>

      </CardInfoBox>
    </CardProductStyled>
  )
}

export default ProductCard
