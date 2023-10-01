import { Form } from "formik";
import styled from "styled-components"

export const FormStyled = styled(Form)` 
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    text-align: center;
    width: 80%;
    max-width: 550px;
    background: var(--Black);
    padding: 15px 10px;
    border-radius: 1rem;
    gap: 10px;

    button {
        background: var(--Verdigris);
        color: var(--Black);
    }

    
    @media (min-width: 1040px) {
        gap: 18px;
        padding: 22px 15px;
    }
`;
