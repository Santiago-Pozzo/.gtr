import styled from "styled-components"

export const StickyStyled = styled.div`
    position: absolute;
    top: 100px;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--Black-olive);

    min-width: 150px;
    max-width: 90%;
    height: 32px;
    border-radius: 1rem 0 0 1rem;

    padding: 8px 0 8px 8px;

    @media (min-width: 760px) {
        top: 140px;
        min-width: 220px;
        max-width: 50%;
        height: 50px;
        padding: 15px 0 12px 15px;
    }

    h3 {
        padding: 0;
        margin: 0;
        font-size: 15px;

        @media (min-width: 760px) {
            font-size: 20px;
        }
    }

    button {
        padding: 5px;
        margin: 0;
        background: none;
        border: none;

        display: flex;
        align-items: center;
        justify-content: center;

        height: 100%;

        cursor: pointer;

        left: 0;
        border-radius: 10px 0 0 10px;
        padding: 8px;

        &:hover {
            background: var(--Black) 
        }

        @media (min-width: 760px) {
            padding: 8px 15px;
        }

        :last-child {
            color: var(--Snow);
            padding: 0;
            margin: 0;
            width: 25px;
            height: 25px;

            @media (min-width: 760px) {
                width: 35px;
                height: 35px;
            }
        }
    }
`