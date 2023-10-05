import styled from "styled-components"

export const ProducsWraperStyled = styled.section`
    display: flex;
    flex-direction: column;
    margin: 50px 10px;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 25px;

    @media (min-width: 760px) {
        gap: 40px;
    }
`;

    export const ProductsBoxStyled = styled.div`
        display: grid;
        place-items: center;
        justify-content: center;
        grid-template-columns: repeat(auto-fit, 200px);
        gap: 1rem;
        column-gap: 1rem;
        width: 100%;
        max-width: 900px;
    `;

        export  const CardProductStyled = styled.div`
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: white;
            width: 170px;

            padding: 0;
            gap: 0;


            @media (min-width: 760px) {
                width: 200px;
            }
        `;
            export const CardCategory = styled.h4`
            margin: 0;
                font-family: 'Yanone Kaffeesatz', sans-serif;
                font-weight: 400;
                font-size: 18px;
                padding: 4px 0 1px;
                color: var(--Verdigris);
                background-color: var(--Black);
                width: 100%;

                @media (min-width: 760px) {
                    font-size: 20px;
                }
            `;

            export const CardImg = styled.div` 
                width: 100px;
                height: 150px;
                background-color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 5px;
                cursor: pointer;

                &:hover {
                    opacity: 90%
                }
                
                img {
                    max-width: 100%;
                    max-height: 100%;
                    position: center;
                }

                @media (min-width: 760px) {
                    width: 120px;
                    height: 180px;
                }
            `;

            export const CardInfoBox = styled.div`
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 100%;
                background-color: var(--Black);

                &:hover p{
                    display:flex;
                }

                &:active p{
                    display:flex;
                }
            `;

                export const CardBrand = styled.h2`
                    margin: 2px;
                    font-family: 'Archivo Narrow', sans-serif;
                    font-weight: 400;
                    font-size: 22px;
                    cursor: pointer;
                    
                    &:hover {
                        opacity: 90%
                    }

                    @media (min-width: 760px) {
                        font-size: 25px;
                    }
                `;

                export const CardModel = styled.h3`
                    margin: 2px;
                    font-family: 'Libre Franklin', sans-serif;
                    font-weight: 400;
                    font-size: 20px;
                    cursor: pointer;

                    &:hover {
                        opacity: 90%
                    }

                    @media (min-width: 760px) {
                        font-size: 25px;
                    }
                `;

                export const CardDescription = styled.p`
                    display: none;
                    margin: 2px;
                    padding: 5px;
                    font-family: 'Yanone Kaffeesatz', sans-serif;
                    font-weight: 200;
                    font-size: 18px;

                    @media (min-width: 760px) {
                        margin: 2px;
                        width: 192px;
                        height: 70px;
                        display: flex;
                        text-align: center;
                        align-items: center;
                        justify-content: center;
                        font-family: 'Yanone Kaffeesatz', sans-serif;
                        font-weight: 200;
                        font-size: 18px;
                    }
                `;

                export const CardBottomBox = styled.div`
                    display: flex;
                    align-items: center;  
                    justify-content: space-between;              
                    max-width: 100%;
                    column-gap: 20px;
                    padding: 5px;

                    p {
                        font-family: 'Yanone Kaffeesatz', sans-serif;
                        font-weight: 200;
                        font-size: 18px; 
                        margin: 0;

                        @media (min-width: 760px) {
                            font-size: 22px;
                        }
                    }

                    button {
                        color: var(--Black);
                        padding: 3px 10px 2px;
                        font-weight: 200;

                        @media (min-width: 760px) {
                            font-size: 22px;
                        }
                    }

                    @media (min-width: 760px) {

                    }
                `;

                export const BottonMsgStyled = styled.div`
                    display: none;

                   &.active {
                    display: flex;
                    flex-direction: row;
                    text-align: center;
                    align-items: center;
                    justify-content: center;

                    padding: 5px 1px;
                    gap: 1px;
                   }
                `;

                    export const BottomSpanStyled = styled.span`
                       margin: 0;
                       padding: 0;
                       font-size: 12px;
                       letter-spacing: 1px;
                       
                       @media (min-width: 760px) {
                            font-size: 14px;
                       }
                    `;

                    export const BottomPStyled = styled.p`
                       margin: 0;
                       padding: 0;                    
                       font-size: 11px;

                       @media (min-width: 760px) {
                            font-size: 13px;
                       }
                    `;


    export const ButtonBoxStyled = styled.div`
        width: 50%;
        max-width: 220px;
        margin-top: 25px;
        gap: 8px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;

        @media (min-width: 760px) {
            max-width: 350px;
        }

        button {
            background-color: var(--Verdigris);

            @media (min-width: 760px) {
                font-size: 22px;
            }
        }
    `;            