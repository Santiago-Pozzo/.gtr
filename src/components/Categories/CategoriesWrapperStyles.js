import styled from "styled-components"
import { motion } from "framer-motion"

export const CategoriesTitleStyled = styled.h1`
        margin-top: 50px;
        width: 100%;
        text-align: center;
        font-size: 20px;
`;

export const CategoriesWrapperStyled = styled.section`
    max-width: 80%;
    background-color: var(--Verdigris);
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 15px;
    gap: 8px;
`;

    export const CategoryCardStyled = styled(motion.div)`
        cursor: pointer;
        width: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background-color: var(--Black-olive);
        border-radius: 12px;
        padding: 6px;

        &:hover {
            background-color: var(--Black);
        }

        @media (min-width: 1020px) {
            width: 70px;
            border-radius: 20px;
            padding: 10px;
        }

            :first-child {
                margin-top:10px;
                height: 26px;
                width: 26px;

                @media (min-width: 1020px) {
                    height: 32px;
                    width: 32px;
                }
            }

            h2 {
                font-family: 'Yanone Kaffeesatz', sans-serif;
                font-weight: 200;
                font-size: 18px;

                @media (min-width: 1020px) {
                    font-size: 25px;
                }
            }
    `;