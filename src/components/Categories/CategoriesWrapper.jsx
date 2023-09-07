import React from 'react'
import { CategoriesWrapperStyled, BrandWrapperStyled, CategoryCardStyled } from './CategoriesWrapperStyles'
import CategoryCard from './CategoryCard'
import BrandCard from './BrandCard'
import { useContext } from 'react'
import { Context } from "../../Contexts/CategoriesBrandContext"
import { useSelector, useDispatch } from "react-redux"
import { selectCategory } from '../../Redux/Categories/CategoriesSlice'

import {AiFillTrademarkCircle} from "react-icons/ai"

const CategoriesWrapper = () => {
  const { state, dispatch } = useContext(Context);
  const dispatchSelectCat = useDispatch();
  const selectedCategory = useSelector((state)=> state.categories.selected);
  const {categories} = useSelector((state)=> state.categories);
  const {brands} = useSelector((state)=> state.brands);

  const handleClick = (cat) => {
    dispatch({ type: "toggleMenu" });
    dispatchSelectCat(selectCategory(cat)); 
  };

  return (
    <>  
        <CategoriesWrapperStyled>
            {
              categories.map((category) => {
                return <CategoryCard 
                       {...category} 
                       key={category.id}
                        />
              })
            }
            <CategoryCardStyled
              className={selectedCategory == "Marcas" ? "selected" : ""}
              whileTap={{scale:0.95}}
              onClick={ 
                () => handleClick("Marcas")
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
            Object.values(brands).map((entrie)=>{
              return <BrandCard
                      key={entrie.brand}
                      {...entrie}
                      />     
              })
          }
          </BrandWrapperStyled>
      </>
  )
}

export default CategoriesWrapper
