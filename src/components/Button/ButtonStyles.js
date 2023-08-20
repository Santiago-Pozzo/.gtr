import {styled} from "styled-components"
import {motion} from "framer-motion"

export const ButtonStyled = styled(motion.button)`
    width: fit-content;
    padding: 10px 15px 8px;
    border: none;
    border-radius: 1rem;
    outline: none;
    background: var(--Hollywood-cerise);
    color: var(--Black-olive);
    font-weight: 400;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;


    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-size: 18px;
    font-weight: 600;

    &:hover {
        opacity: 90%
    }

    &:disabled {
        cursor:not-allowed;
        opacity: 0.5;
    }

    @media (min-width: 760px) {
        font-size: 25px;
        padding: 10px 35px;
    }

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 5px;
    }
`;