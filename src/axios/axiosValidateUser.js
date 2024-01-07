import axios from "axios";
import { BASE_URL_GTR_API }  from "../Utils/Constats"

export const verifyUser = async (email, codigo) => {

    try {
        const response = await axios.patch( 
            `${BASE_URL_GTR_API}auth/verify`,
            {
                email,
                codigo,
            },  
        );           

        alert (response.data.msj)
        return response.data
            
    } catch (error) {

        return alert ( error.response.data.msj ) 
    }
}