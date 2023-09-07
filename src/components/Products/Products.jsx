import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import { ProducsWraperStyled, ProductsBoxStyled, ButtonBoxStyled } from './ProductsStyles'
import  ProductCard  from "./ProductCard"
import { BrandMenu } from '../../Contexts/CategoriesBrandContext'
import  { ButtonStyled }  from '../Button/ButtonStyles'
import Categories from "../Categories/CategoriesWrapper"
import { LIMIT_PRODUCTS } from '../../Utils/Constats'
import { selectBrand } from '../../Redux/Categories/BrandsSlice'
import { ProductsDataOrderByBrand } from '../../data/ProductsData'
//import Buttons, { limit } from './Buttons'


const Products = () => {
  let productsData = useSelector((state)=> state.products.products);
  let productsByBrand = useSelector((state)=> state.products.productsByBrand);  
  let selectedCategory = useSelector((state)=> state.categories.selected);
  let selectedBrand = useSelector((state)=> state.brands.selected);

  //Buscar arlternativa mejor----------------
  if (selectedCategory === "Marcas") {
    selectedCategory = null;
  }

  if (selectedCategory === "Ver todo") {
    selectedCategory = null;
  }

  if (selectedCategory) {
    productsData = {[selectedCategory]: productsData[selectedCategory]}
  }

  if (selectedBrand) {
    productsData = {[selectedBrand]: productsByBrand[selectedBrand]}
  }
  //------------------------------------------

  const totalProducts = useSelector((state) => state.products.totalProducts)
  const [limit, setLimit] = useState(LIMIT_PRODUCTS)

  useEffect(()=>{
    setLimit(LIMIT_PRODUCTS)
  }, [selectedCategory, selectedBrand])

  return (
    <BrandMenu>
     <ProducsWraperStyled>
        <Categories/> 

        <ProductsBoxStyled >
            {
                Object.entries(productsData).map(([,prods])=>{
                    return prods.map((prod)=>{
                      if (limit > prod.id 
                        || selectedCategory 
                        || selectedBrand){  
                        return <ProductCard {...prod} key={prod.id}/>
                      } 
                      return null 
                    })
                })
            }
        </ProductsBoxStyled>

        
        {
            !selectedCategory && (
            <ButtonBoxStyled>
                <ButtonStyled 
                onClick={()=>setLimit((prevLimit)=> prevLimit - LIMIT_PRODUCTS)}
                 whileTap={{scale: 0.95}} 
                 disabled= {LIMIT_PRODUCTS == limit}
                >
                    Ver menos
                </ButtonStyled>
    
                <ButtonStyled 
                 onClick={()=>setLimit((prevLimit)=> prevLimit + LIMIT_PRODUCTS)}
                 whileTap={{scale: 0.95}}
                 disabled= {totalProducts <= limit }
                >
                    Ver más
                </ButtonStyled>
            </ButtonBoxStyled> 
            )
        }

     </ProducsWraperStyled>
    </BrandMenu>

  )
}

export default Products
