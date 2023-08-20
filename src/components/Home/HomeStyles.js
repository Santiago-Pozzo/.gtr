import styled from "styled-components"

export const HomeWrapperStyled = styled.div` 
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 0 50px;

    @media (min-width: 760px) {
        padding: 0 0 80px;
        gap: 40px;
    }

    button {
        background-color: var(--Verdigris);
    }
`;