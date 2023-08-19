import styled from "styled-components"
import {motion} from "framer-motion"
import { NavLink } from "react-router-dom";

export const FooterStyled = styled.footer`
    width: 100%;
    background-color: var(--Black);   
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10px 20px; 
    column-gap: 50px;


    @media (min-width: 760px) {
        column-gap: 75px;        
    }
`;

    export const FooterLogoStyled = styled.img`
        height: 100px;

        @media (min-width: 760px) {
            height: 150px;
        }
    `;

    export const FooterNavListStyled = styled.nav`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        row-gap: 10px;
    `;

        export const FooterList = styled.ul`
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            margin: 0;
            padding: 0;
            gap: 5px;

            @media (min-width: 760px) {
                column-gap: 12px
            }
        `;

            export const FooterListLi = styled(motion.li)`
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 2px 10px;
                gap: 2px;
                border-radius: 10px;
                cursor: pointer;

                &:hover {
                    background-color: var(--Black-olive);
                }

                @media (min-width: 760px) {
                    padding: 3px 20px;
                    gap: 4px;
                    border-radius: 13px;
                }

                    div {
                        height: 20px;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        :first-child {
                            width:100%;
                            height:100%;
                            color: var(--Hollywood-cerise);
                        }

                        @media (min-width: 760px) {
                            height: 25px;
                        }
                    }

                    span {
                        margin-top:3px;
                        font-family: 'Yanone Kaffeesatz', sans-serif; 
                        font-weight: 200;
                        font-size: 16px;

                        @media (min-width: 760px) {
                            font-size: 20px;
                        }
                    }
            `;




            