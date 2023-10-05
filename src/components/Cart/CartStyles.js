import styled from "styled-components"

export const CartWrapperStyled = styled.div`
    display: none;
    
    &.active {
        display: flex;
        height: calc(100vh - 4rem);
        width: 50%;
        min-width: 220px;
        max-width: 400px;
        position: fixed;
        top: 80px;    
        right: 0;
        z-index: 2;
        background: var(--Black);
        flex-direction: column;
        align-items: center;
        padding: 1rem 5px;
    }
    @media (min-width: 760px){
        top: 110px;
    }
`;

export const EmptyCartMsg = styled.div`
    font-size: 15px;
    text-align: center;
    padding: 8px;

    span {
        font-weight: 600;
        letter-spacing: 1px;
        margin-right: 2px;
    }

    @media (min-width: 760px){
        font-size: 20px;
    }
`;

export const ProductBoxStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    //justify-content: center;
    gap: 5px;
    overflow-y: scroll;   
    height: 65%;
    margin-bottom: 10px;
    padding: 10px 0;
`;


    export const CartProductStyled = styled.div` 
        height: 60px;
        width: 80%;
        border: solid 1px;
        border-color: var(--Hollywood-cerise);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px;

        @media (min-width: 760px){
            height: 72px;
        }
    `;

    export const ProductInfoStyled = styled.div `
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        gap: 7px;
    `;

        export const CartProductImgStyled = styled.div`
            display: none;
            
            img {
                height:90%;
            }

            @media (min-width: 760px){
                display: flex;
                align-items: center;
                justify-content: center;
                height: 60px;
                width: 60px;
                background-color: white;
                border-radius: 8px;
            }
        `;

        export const CartProductDescriptionStyled = styled.div`
            display: flex;
            flex-direction: column;
            align-items: right;
            justify-content: center;
            padding: 0;

            h2 {
                margin: 0;
                font-family: 'Archivo Narrow', sans-serif;
                font-size: 15px;  
                font-weight: 500; 

                @media (min-width: 760px){
                    font-size: 18px;           
                }       
            }

            h3 {
                margin: 0;
                font-family: 'Libre Franklin', sans-serif;
                font-size: 12px;
                font-weight: 200;

                @media (min-width: 760px){
                    font-size: 15px;           
                }      
            }

            p {
                margin: 0;
                font-family: 'Yanone Kaffeesatz', sans-serif;
                font-size: 15px;
                letter-spacing: 1px;

                @media (min-width: 760px){
                    font-size: 18px;           
                }      
              }
        `;

    export const CartControlsStyled = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        button {
            height: 15px;
            width: 100%;
            border-radius: 3px;
            padding: 0;
            font-size:14px;
            font-weight:200;
            color: var(--Snow);

            @media (min-width: 760px){
                font-size: 18px; 
                letter-spacing: 1px;
                padding: 11px 0 8px;                   
            }
        }
    `;    

        export const CartQuantityHandlerStyled = styled.div` 
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 3px;
            width: 100%;
            @media (min-width: 760px){
                gap: 7px;                 
            }

            button {
                height: 15px;
                width: 15px;
                border-radius: 3px;
                padding: 3px 0 2px;
                font-size: 18px;

                @media (min-width: 760px){
                    font-size: 25px; 
                    padding: 5px 0 3px; 
                    height: 19px;
                    width: 19px;                  
                }
            }

            p {
                margin: 0;
                font-family: 'Yanone Kaffeesatz', sans-serif;
                font-size: 16px;
                padding: 2px 0 1px;
                
                @media (min-width: 760px){
                    font-size: 18px;                    
                }
            }
        `;

    export const CartProductPriceStyled = styled.h3`
        margin: 0;
        font-family: 'Archivo Narrow', sans-serif;
        font-size: 15px;  
        font-weight: 400; 

        @media (min-width: 760px){
            font-size: 18px;                    
        }
    `;

    export const TotalBoxStyled = styled.div`
        display: none;

        &.active {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            background-color: var(--Verdigris);
            gap: 15px;
            padding: 6px 0;
        }


        h2 {
            font-family: 'Archivo Narrow', sans-serif;
            letter-spacing: 2px;
            font-size:15px;
            font-weight: 200;
            margin: 0;

            @media (min-width: 760px){
                font-size: 20px;              
            }
        }

        h3 {
            font-size: 15px;
            margin: 0;

            @media (min-width: 760px){
                font-size: 18px;              
            }
        }
    `;
    
    export const CartBtnBoxStyled = styled.div `
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        margin-top: 20px;

        button {
            color: var(--Black); 
            font-size: 15px;

            @media (min-width: 760px){
                font-size: 20px;
                padding: 8px 15px;
            }
        }
    `