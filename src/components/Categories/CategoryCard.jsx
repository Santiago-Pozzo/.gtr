import React from 'react'
import { CategoryCardStyled } from './CategoriesWrapperStyles'
import CategoryIcon from './CategoryIcon'
import { useContext } from 'react'
import { Context } from "../../Contexts/CategoriesBrandContext"
import { useSelector, useDispatch } from "react-redux"
import { selectCategory } from '../../Redux/Categories/CategoriesSlice'
import { setNullBrand } from '../../Redux/Categories/BrandsSlice'

const CategoryCard = ({ icon, category }) => {
  const dispatchSelectCat = useDispatch();
  const dispatchNullBrand = useDispatch()
  const selectedCategory = useSelector((state)=> state.categories.selected);

  const handleClick = (cat) => {
    dispatch({ type: "closeMenu" });
    dispatchSelectCat(selectCategory(cat)); 
    dispatchNullBrand(setNullBrand());
  };


  //después mudar la lógica de este contexto hacia el estado globlar y trabajar en redux
  const { state, dispatch } = useContext(Context);

  return (
    <>
      <CategoryCardStyled
       className={selectedCategory == category ? "selected" : ""}
       whileTap={{scale:0.95}}
       onClick={
        () => handleClick(category)
       } 
      >
        <CategoryIcon iconName={icon} />
        <h2> {category} </h2>
      </CategoryCardStyled>
    </>

  )
}

export default CategoryCard
