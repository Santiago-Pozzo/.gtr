import axios from "axios";
import { BASE_URL_GTR_API }  from "../Utils/Constats"

export const postOrder = async (token, cartItems, total) => {
        
    const arrayProductos = cartItems.map((item)=>{
        return {
            id_producto: item.id,
            precioAlComprar: item.price,
            cantidad: item.quantity
        }
    })

    try {
        const response = await axios.post( 
            `${BASE_URL_GTR_API}orders/`,
            {
                arrayProductos,
                precioTotalAlComprar: total,
            },
            {
                headers: {
                    token
                }
            }            
        );           

        alert (response.data.msj)
        return response.data
            
    } catch (error) {
console.log(error.response);
        return alert ( error.response.data.msj ) 
    }
}