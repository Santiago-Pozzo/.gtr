import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LoginWrapperStyled = styled.section`
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

    p {
        font-family: 'Libre Franklin', sans-serif;
        font-size: 15px;

        @media (min-width: 760px) {
            font-size: 20px;
        }
    }

    span {
        font-family: 'Libre Franklin', sans-serif;
        letter-spacing: 1px;        
    }

`;

    export const LinkStyled = styled(NavLink)`
        color: var(--Hollywood-cerise);
        
        &:hover {
            text-decoration: underline;
        }
    `;

