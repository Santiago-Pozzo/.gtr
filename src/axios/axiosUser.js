import axios from "axios";
import {BASE_URL, BASE_URL_GTR_API} from "../Utils/Constats"

export const createUsr = async (nombre, apellido, email, contraseña) => {
    try {
        const response = await axios.post(
            `${BASE_URL_GTR_API}auth/register`,
            {
                nombre,
                apellido,
                email,
                contraseña
            }
        );
           
            return response.data.user;
            
    } catch (error) {
        
        return alert (error.response.data.msj + error.response.data.errors.errors[0].msg) 
    }
}

export const loginUser = async (email, contraseña) => {
    try {
        const response = await axios.post( 
            `${BASE_URL_GTR_API}auth/login`,
            {
                email,
                contraseña
            }
        );
            
        return response.data ;

    } catch (error) {
        
        return alert (error.response.data.msj)
    }
};