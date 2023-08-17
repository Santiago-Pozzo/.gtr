import styled from "styled-components"


export const HeroContainerStyled = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 15px;
    max-width: 1200px;
    align-items: center;
    text-align: center;
`;

    export const HeroImgContainer = styled.div`
        background-image: url('https://www.segundoenfoque.com/wp-content/uploads/2022/04/Las-5-guitarras-ele%CC%81ctricas-ma%CC%81s-legendarias-de-la-historia-del-rock-scaled.jpg');
        background-position: center center;
        background-size: cover;
        width:100vw;
        height: 80px;

        @media (min-width: 760px) {
            height: 120px;
        }
    `;

    export const HeroTextContainerStyled = styled.div`
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        text-align: center;
        gap: 12px;

        @media (min-width: 760px) {
            gap: 20px;
        }

        h1 {
            font-family: 'Archivo Narrow', sans-serif;
            color: var(--Snow);
            font-size: 28px;
            font-weight:600;
            margin: 0;
            
            @media (min-width: 760px) {
                font-size: 50px;
            }
         }

        p {
            font-family: 'Libre Franklin', sans-serif;
            color: var(--Snow);
            font-size: 20px;
            font-weight: 600;
            margin: 0;

            @media (min-width: 760px) {
                font-size: 35px;
            }
        }

        button {
         background-color: var(--Verdigris);   
        }
    `;