import axios from "axios";
import {BASE_URL} from "../Utils/Constats"

export const createUsr = async (nombre, email, password) => {
    try {
        const response = await axios.post(
                `${BASE_URL}auth/register`,
                {
                    nombre,
                    email,
                    password
                }
            );

            return response.data;
    } catch (error) {
        return alert (error.response.data.errors[0].msg) //esto viene dado en la forma en que la API devuelve los errores
    }
}