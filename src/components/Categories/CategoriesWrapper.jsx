import React from 'react'
import { CategoriesWrapperStyled, BrandWrapperStyled, CategoryCardStyled } from './CategoriesWrapperStyles'
import CategoryCard from './CategoryCard'
import { Categories } from '../../data/Categories'
import { Brands, ProductsDataOrderByBrand } from '../../data/ProductsData'
import BrandCard from './BrandCard'
import { useContext } from 'react'
import { Context } from "../../Contexts/CategoriesBrandContext"

import {AiFillTrademarkCircle} from "react-icons/ai"
import { Provider } from 'react-redux'

const CategoriesWrapper = () => {
  const { state, dispatch } = useContext(Context);

  return (
    //<Provider>
    <>  
        <CategoriesWrapperStyled>
            {
                Categories.map((category) => {
                    return <CategoryCard 
                            {...category} 
                            key={category.id}
                            />
                })
            }
            <CategoryCardStyled
              onClick={ 
                () => dispatch({ type: "toggleMenu" })
              }
            >
              <AiFillTrademarkCircle/>
              <h2>Marcas</h2>
            </CategoryCardStyled>
        </CategoriesWrapperStyled>

        <BrandWrapperStyled
         className={state.isActive ? "active" : ""}
        >
        {
          Object.entries(Brands).map(([brand, info])=>{
            return <BrandCard
                     key={brand}
                     {...info}
                   />
          })
        }
        </BrandWrapperStyled>
      </>
   // </Provider>
    
  )
}

export default CategoriesWrapper
