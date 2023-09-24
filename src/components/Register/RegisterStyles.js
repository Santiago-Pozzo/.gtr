import styled from "styled-components";

export const RegisterWrapperStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    padding: 50px 0;

    h2 {
        font-family: 'Archivo Narrow', sans-serif;
        font-size: 28px;

        @media (min-width: 760px) {
            font-size: 35px;
        }
    }

`;