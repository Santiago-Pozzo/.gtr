import * as Yup from "yup"

export const registerValidationEsch = Yup.object({
    name: Yup.string().trim().required("Campo obligatorio"),
    lastname: Yup.string().trim().required("Campo obligatorio"),
    email: Yup.string().email("Correo inválido").required("Campo obligatorio"),
    password: Yup.string().trim().required("Campo obligatorio"),
});