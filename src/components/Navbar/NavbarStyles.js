import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarContainerStyled = styled.header`
    height: 80px;
    width: 100%;
    background-color: var(--Black);
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media (min-width: 760px) {
            height: 110px;
        }
`;

    export const NabvarLogoContainerStyled = styled.img`
        margin-left: 5px;
        height: 80px;

        @media (min-width: 760px) {
            height: 110px;
        }
     `;

    export const NavbarLabelsBoxStyled = styled.div`
        display: flex;
        text-align: center;
        align-items: center;
        gap: 10px;
    `;

        export const NavbarBtnStyled = styled.button`
            display: flex;
            align-items: center;
            justify-content: center;
            height: 30px;
            cursor: pointer;
            color: var(--Hollywood-cerise);
            font-size: 24px;
            border: none;
            background: none;
        `;

            export const NavbarMenuBtnStyled = styled(NavbarBtnStyled)`
                @media (min-width: 760px) {
                    display: none;
                }
            `;

            export const NavbarCartBtnStyled = styled(NavbarBtnStyled)`
                display: none;
            `;

    export const NavbarLinksContainerStyled = styled.div`
        display: none;

        &.active {
            display: flex;
            flex-direction: column;
            justify-content: top;
            z-index: 2;
            background: var(--Black);
            position: fixed;
            top: 0;
            right: 0;
            height: 100vh;
            padding: 100px 10px;
            gap: 15px;
        }

        @media (min-width: 760px) {
            display: flex;
            height: auto;
            position: relative;
            top: 0;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            padding: 8px 3px;
            gap: 1px;
        }

    `;

        export const NavbarLinkStyled = styled(NavLink)`
            cursor: pointer;
            font-family: 'Libre Franklin', 
            sans-serif;
            font-size: 12px; 
            padding: 5px 15px;
            border-radius: 1rem;

            &.active {
                color: var(--Hollywood-cerise);
            }
            
            &:hover {
            background-color: var(--Black-olive);
            }

            @media (min-width: 760px) {
                font-size: 15px;
            }

            @media (min-width: 1040px) {
                font-size: 17px;
            }
            
            div {
                display: flex;
                align-items: center;
                justify-content: left;
                gap: 5px;

                @media (min-width: 760px) {
                justify-content: center;
                }
            }
        `;

            export const NavbarLinkIconStyled = styled.div`
                color: var(--Hollywood-cerise);
                display: flex;
                align-items: center;
                justify-content: center;    
            `;

    export const Overlay = styled.div` 
        display: none;
        
        &.active {
            display: flex;
            position: absolute;
            top: 80px;
            left: 0;
            height: 100vh;
            width: 100%;
            z-index: 1;
            background: rgba(255, 255, 255, 0.05);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
            backdrop-filter: blur(5px);
           -webkit-backdrop-filter: blur(5px);

            @media (min-width: 760px) {
                top: 100px;
            }
        }
    `;
