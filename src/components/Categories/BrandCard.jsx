import React from 'react'
import { BrandCardStyled } from './CategoriesWrapperStyles'
import { Brands } from '../../data/ProductsData';

const BrandCard = ({ brand, brandLogo }) => {
  return (
    <BrandCardStyled>
        <div>
            <img src={brandLogo} alt={brand} />
        </div>
        <h3>{brand}</h3>
    </BrandCardStyled>
  )
}

export default BrandCard
