import React from 'react'
import { products } from '../../data/ProductsData'
import { FeaturedWrapperStyled, FeaturedCardBoxStyled, LogoContainer, FeaturedCardStyled, FeaturedHeadStyled } from "./FeaturedStyles"
import  Logo2  from '../../assets/images/logogtr2.png'

const Featured = () => {
  return (
    <FeaturedWrapperStyled>
        <FeaturedHeadStyled> 
            <LogoContainer><img src={Logo2} alt="logo" /></LogoContainer>
            <h2>Productos destacados</h2>
        </FeaturedHeadStyled>
        
        <FeaturedCardBoxStyled>
            {
            products.map((product)=>{
                return <FeaturedCardStyled key={product.id}>
                    <img src={product.img} alt={product.model} />
                    <div>
                        {/* <img src={Logo2} alt="" /> */}
                        <h3>{product.brand}</h3>
                        <h4>{product.model}</h4>
                    </div>
                </FeaturedCardStyled>
            })
        }
        </FeaturedCardBoxStyled>

    </FeaturedWrapperStyled>
  )
}

export default Featured
