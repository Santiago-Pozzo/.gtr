import React from 'react'
import  { ProductsData, ProductsDataOrderByBrand } from '../../data/ProductsData'
import { ProducsWraperStyled, ProductsBoxStyled, ButtonBoxStyled } from './ProductsStyles'
import  ProductCard  from "./ProductCard"
import { BrandMenu } from '../../Contexts/CategoriesBrandContext'

import  { ButtonStyled }  from '../Button/ButtonStyles'
import Categories from "../Categories/CategoriesWrapper"

const Products = () => {

  return (
    <BrandMenu>
     <ProducsWraperStyled>
        <Categories /> 

        <ProductsBoxStyled>
            {
                Object.entries(ProductsData).map(([,prods])=>{
                    return prods.map((prod)=>{
                        return <ProductCard {...prod} key={prod.id}/>
                    })
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
    </BrandMenu>

  )
}

export default Products
