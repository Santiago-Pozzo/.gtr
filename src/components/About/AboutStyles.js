import styled from "styled-components"

export const AboutWrapperStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    width: 100%;
    padding: 20px;
    gap: 50px;

    @media (min-width: 760px) {
        padding: 40px;
    }
`;

    export const AboutInfoContainerStyled = styled.div`
        display: flex;
        align-items:center;
        justify-content: center;
        width: 80%;
        flex-wrap:wrap;
        gap: 20px;

        @media (min-width: 760px) {
            flex-wrap:nowrap;
            gap: 40px;
        }

        h2 {
            font-family: 'Archivo Narrow', sans-serif; 
            font-size: 30px;
            font-weight: 200;
            padding: 0;
            margin: 0;

            @media (min-width: 760px) {
                font-size: 35px;
            }
        }

        h3 {
            font-family: 'Libre Franklin', sans-serif; 
            font-size: 22px;
            font-weight: 200;
            padding: 0;
            margin: 0;
            
            @media (min-width: 760px) {
                font-size: 30px;
            }
        }

        p {
            font-family: 'Yanone Kaffeesatz', sans-serif; 
            font-size: 18px;
            font-weight: 200;
            padding: 0;
            margin: 0;

            @media (min-width: 760px) {
                font-size: 22px;
            }
        }

        button {
            background-color: var(--Verdigris)
        }
    `;

        export const AboutImageContainerStyled = styled.div`
            display: none;

            @media (min-width: 760px) {
                display: flex;
                align-items:center;
                justify-content: center;
                min-width: 300px;
                left: 0;

                img {                    
                    width:100%
                }
            }
        `;

        export const AboutTextContainerStyled = styled.div`
            display: flex;
            flex-direction: column;
            align-items:center;
            justify-content: center;
            text-align: center;
            gap: 12px;
                
            @media (min-width: 760px) {
                gap: 20px;
            }            
        `;

        export const AboutLocationContainerStyled = styled.div`
                display: flex;
                align-items:center;
                justify-content: center;
                height: 120px;
                width: 120px;
                //padding:10px;
                //border-radius: 1rem;
                //border: solid 2px;
               // border-color: var(--Black);
                //background-color: var(--Verdigris);

                
                @media (min-width: 760px) {
                    height: 200px;
                    width: 200px;
                }

                iframe {
                    border-radius: 1rem;
                    height:100%;
                    width: 100%
                }
        `;
