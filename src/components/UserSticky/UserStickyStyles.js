import styled from "styled-components"

export const StickyStyled = styled.div`    
    z-index:2;
    position: fixed;
    top: 82px;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--Black-olive);

    min-width: 150px;
    max-width: 90%;
    height: 25px;

    border-radius: 1rem 0 0 1rem;
    border: solid 1px;
    border-color: var(--Snow);
    border-right: none;

    padding: 8px 0;

    &.closed {
        min-width: 10px;
    }

    :first-child {
        height: 17px;
        width: 17px;

        margin-left: 1px;

        border-radius: 50%;
        padding: 2px;

        cursor: pointer;

        &:hover {
          background: var(--Black) 
        }

        @media (min-width: 760px) {
           height: 25px;
           width: 25px;
        }
    }

    :nth-child(2) {
        height: 18px;
        width: 18px;
        margin-right: 4px;

        @media (min-width: 760px) {
           height: 25px;
           width: 25px;
        }
    }

    @media (min-width: 760px) {
        top: 115px;
        min-width: 220px;
        max-width: 50%;
        height: 32px;
        padding: 15px 0;
    }

    h3 {
        padding: 0;
        margin: 0;
        margin-right: 5px;
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