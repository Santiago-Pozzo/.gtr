import React, { useState, useEffect } from 'react';
import { ButtonStyled } from '../Button/ButtonStyles'
import Featured from "../Featured/Featured"
import { useNavigate } from 'react-router-dom'
import Hero from '../Hero/Hero'
import { HomeWrapperStyled } from "./HomeStyles"
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsData } from '../../Redux/Products/productsFunctions';
import { getProducts } from '../../Redux/Products/ProductsSlice';
import { getBrands } from '../../Redux/Categories/BrandsSlice';

const Home = () => {
    const navigate = useNavigate();
    const stateProducts = useSelector((state)=>state.products)
    const dispatch = useDispatch();
    return (
    <HomeWrapperStyled>  
        <Hero/>

        <Featured/>

        <ButtonStyled 
            whileTap={{scale: 0.95}}
            onClick={async ()=> {
                if ( !stateProducts.loaded ) {
                    const {
                        apiProducts,
                        apiProductsData,
                        apiProductsDataOrderByBrand,
                        TotalApiProducts,
                        apiBrands
                    } = await fetchProductsData();

                    dispatch(getProducts({
                        products: apiProductsData,
                        productsBybrand: apiProductsDataOrderByBrand,
                        totalProducts: TotalApiProducts,
                        api_prods: apiProducts,
                    }));

                    dispatch(getBrands(apiBrands));
                } 
                navigate("/products");
            } }
            >Entrá a nuestra tienda
        </ButtonStyled>  
    </HomeWrapperStyled>
  )
}

export default Home
