import * as Yup from "yup"

export const registerValidationEsch = Yup.object({
    name: Yup.string().trim().required("Campo obligatorio"),
    lastname: Yup.string().trim().required("Campo obligatorio"),
    email: Yup.string().email("Correo inválido").required("Campo obligatorio"),
    password: Yup.string().
                trim()
                .required("Campo obligatorio")
                .min(8, "La contraseña debe tener al menos 8 caracteres")
                
});

export const contactValidationEsch = Yup.object({
    name: Yup.string().trim(),
    lastname: Yup.string(),
    email: Yup.string().email("Correo inválido").required("Campo obligatorio"),
    msg: Yup.string().trim().max(250, "Máximo 250 caracteres").required("Campo obligatorio"),
});

export const loginValidationEsch = Yup.object({
    email: Yup.string().email("Correo inválido").required("Campo obligatorio"),
    password: Yup.string().
                trim()
                .required("Campo obligatorio")
                .min(8, "La contraseña debe tener al menos 8 caracteres")
                
});

export const validateValidationEsch = Yup.object({
    password: Yup.string().
                trim()
                .required("Campo obligatorio")
                .min(6, "EL código debe tener caracteres")
                .max(6, "EL código debe tener caracteres")                
});