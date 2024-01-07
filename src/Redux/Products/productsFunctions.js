import { getProducts } from "../../axios/axiosProducts";

export async function fetchProductsData (){
    const apiProducts = await getProducts();

    const TotalApiProducts = apiProducts.length;

    const apiProductsData =apiProducts.reduce ((acc, product) => {
        if (!acc[product.cat]){
            acc[product.cat] = [];
        }

        acc[product.cat] = [...acc[product.cat], product];

        return acc;
        },  
    {});

    const apiProductsDataOrderByBrand = apiProducts.reduce ((acc, product) => {
        if (!acc[product.brand]){
            acc[product.brand] = [];
        }

        acc[product.brand] = [...acc[product.brand], product];

        return acc;
        },  
    {});
    
    const apiBrands = apiProducts.reduce ((entrie, product)=> {
        const { brand, brandLogo} = product;
        let id=0;
        if (!entrie[brand]){
            entrie[brand] = {brand, brandLogo, id};
            id = id + 1;
        }
        return entrie;
        },
    {});

    return { apiBrands, apiProducts, apiProductsData, apiProductsDataOrderByBrand, TotalApiProducts }
}
