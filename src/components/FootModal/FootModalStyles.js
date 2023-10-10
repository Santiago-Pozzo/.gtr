import { styled } from "styled-components"

export const FootModalStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 3;

    gap: 5px;
    padding: 2px 5px;

    background-color: var(--Black);

    transform: translateY(0%);
    transition: transform 0.3s ease-in-out;

    &.hidden {
     transform: translateY(100%);
     transition: transform 0.3s ease-in-out;
    }

    @media (min-width: 760px) {
        gap: 15px;
        }

    h3 {
        font-size: 12px;

        @media (min-width: 760px) {
            font-size: 16px;
        }
    }

    button {
        font-size: 15px;
        color: var(--Black);
        padding: 3px 8px;

        @media (min-width: 760px) {
            font-size: 18px;
        }
    }
`;