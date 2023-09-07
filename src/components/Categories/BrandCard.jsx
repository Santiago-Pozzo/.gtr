import React from 'react'
import { BrandCardStyled } from './CategoriesWrapperStyles'
import { Brands } from '../../data/ProductsData';
import { useDispatch, useSelector } from 'react-redux';
import { selectBrand } from '../../Redux/Categories/BrandsSlice';

const BrandCard = ({ brand, brandLogo }) => {
  const dispatchSelectBrand = useDispatch();
  const selectedBrand = useSelector((state) => state.brands.selected)
  
  return (
    <BrandCardStyled
     className={selectedBrand == brand ? "selected" : ""}
     whileTap={{scale:0.95}}
     onClick={()=>dispatchSelectBrand(selectBrand(brand))}
    >
        <div>
            <img src={brandLogo} alt={brand} />
        </div>
        <h3>{brand}</h3>
    </BrandCardStyled>
  )
}

export default BrandCard
