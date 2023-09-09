import styled from "styled-components"

export const ModalStylded = styled.div` 
    display: none;

    &.active {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 1rem;
        height: 250px;
        width: 60%;
        position: fixed;
        top: 25%;
        left: 20%;
        z-index: 5;
        background: var(--Hollywood-cerise);
        text-align: center;
        padding: 10px;
    }

    h2 {
        margin: 0;
        font-size: 25px;
        letter-spacing: 2px;
        font-family: 'Archivo Narrow', sans-serif;

        @media (min-width: 760px) {
            font-size: 30px;
        }
    }

    p {
        font-size: 18px;
        @media (min-width: 760px) {
            font-size: 22px;
        }
    }

    button {
        background-color: var(--Black-olive);
        color: var(--Snow);
        font-weight: 200;
        letter-spacing: 1px;
        padding: 5px 10px 3px;

        @media (min-width: 760px) {
            font-size: 22px;
            padding: 6px 13px 4px;
        }

        &:hover {
            background-color: var(--Black);
        }
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 5px;
        flex-wrap: wrap;
   
        @media (min-width: 760px) {
            gap: 12px;
        }     
    }
`;