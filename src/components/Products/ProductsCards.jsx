import React from 'react'
import { products } from '../../data/ProductsData'
import { CardProductStyled, ProducsWraperStyled, ProductsBoxStyled, CardImg, CardBottomBox,CardCategory, CardBrand, CardModel, CardDescription, CardInfoBox, ButtonBoxStyled } from './ProductsStyles'
import { ButtonStyled } from '../Button/ButtonStyles'

const ProductsCards = () => {
  return (
    <ProducsWraperStyled> 
        <ProductsBoxStyled>
            {
                products.map((product)=>{
                    return <CardProductStyled key={product.id}>
                                <CardCategory>{product.cat}</CardCategory>
                                
                                <CardImg> 
                                    <img src={product.img} alt={product.model} />
                                </CardImg>
                                
                                <CardInfoBox>
                                    <CardBrand>{product.brand}</CardBrand>
                                    <CardModel>{product.model}</CardModel>
                                    <CardDescription>{product.description}</CardDescription>

                                    <CardBottomBox>
                                        <p>${product.price}</p>
                                        <ButtonStyled whileTap={{scale: 0.95}}>
                                            Agregar
                                        </ButtonStyled>
                                    </CardBottomBox>
                                </CardInfoBox>
                           </CardProductStyled> 
                })
            }
        </ProductsBoxStyled>

        <ButtonBoxStyled>
            <ButtonStyled whileTap={{scale: 0.95}}>
                Ver más
            </ButtonStyled>

            <ButtonStyled whileTap={{scale: 0.95}} disabled>
                Ver menos
            </ButtonStyled>
        </ButtonBoxStyled>
    </ProducsWraperStyled>
  )
}

export default ProductsCards
