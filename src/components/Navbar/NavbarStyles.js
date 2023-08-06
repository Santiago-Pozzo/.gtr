import styled from "styled-components";


export const NavbarContainerStyled = styled.header`
    height: 80px;
    //width: 100%;
    background-color: var(--Black);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
`;

    export const NabvarLogoContainerStyled = styled.img`
        height: 100px;

        @media (min-width: 760px) {
            height: 130px;
        }
     `;

    export const NavbarLabelsBoxStyled = styled.div`
        display: flex;
        text-align: center;
        align-items: center;
        gap: 10px;
    `;

        export const NavbarLabelContainerStyled = styled.div`
            display: flex;
            align-items: center;
            justify-content: center;
            height: 30px;
            cursor: pointer;
            color: var(--Hollywood-cerise);
            font-size: 24px;
        `;

            export const NavbarMenuLabelContainerStyled = styled(NavbarLabelContainerStyled)`
                @media (min-width: 768px) {
                    display: none;
                }
            `;

            export const NavbarCartLabelContainerStyled = styled(NavbarLabelContainerStyled)`
                display: none;
            `;

    export const NavbarLinksContainerStyled = styled.div`
        display: none;

        @media (min-width: 768px) {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 30px;
        }

        :hover {
            background-color: var(--Black-olive);
        }
    `;

        export const NavbarLinkStyled = styled.a`
            cursor: pointer;
            font-family: 'Libre Franklin', 
            sans-serif;
            font-size: 18px; 
            padding: 8px 15px;
            border-radius: 1rem;
            
            div {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 5px;
            }
        `;

            export const NavbarLinkIconStyled = styled.div`
                color: var(--Hollywood-cerise);
                display: flex;
                align-items: center;
                justify-content: center;
            `;

