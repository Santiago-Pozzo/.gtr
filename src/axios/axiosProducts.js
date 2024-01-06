import axios from "axios";
import { BASE_URL_GTR_API }  from "../Utils/Constats"

export const getProducts = async () => {
    try {
        const response = await axios.get( `${BASE_URL_GTR_API}products` );

        const productsFormat = response.data.productos.map((prod)=>{
            return {
                id: prod.id_producto,
                cat: prod.categoria,
                brand: prod.marca,
                brandLogo: prod.logo_marca,
                model: prod.modelo,
                description: prod.descripcion,
                img: prod.imagen_url,
                price: prod.precio
            }
        })
           
        return productsFormat;
            
    } catch (error) {
        
        return alert ( error.response.data.msj ) 
    }
}