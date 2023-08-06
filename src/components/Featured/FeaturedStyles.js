import styled from "styled-components"

export const FeaturedWrapperStyled = styled.section`
    margin-top: 35px;
    width:100%;
    height: 200px;
    background-color: var(--Black);   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;

    h2 {
        font-family: 'Archivo Narrow', sans-serif;
        font-size: 23px;
        font-weight: 400;
        margin: 0;

        @media (min-width:760px) {
            font-size: 28px;
        }
    }
`;

    export const FeaturedHeadStyled = styled.div`
        margin: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
    `;

    export const LogoContainer = styled.div`
        height: 30px;
        width: 30px;

        img {
            height: 100%;
            width: 100%;
        }
    `;

export const FeaturedCardBoxStyled = styled.div`
    width: 90%;
    height: 120px;
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    gap: 10px;
    padding: 8px;

    &::-webkit-scrollbar-thumb {
        background-color: var(--Hollywood-cerise); 
    }
`;

    export const FeaturedCardStyled = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--Snow); 
        padding: 5px 13px; 
        border-radius: 1rem;   
        cursor: pointer;      

        img {
            height:100px;
        }

        h3, h4 {
            color: var(--Black);
            margin: 0;
        }

        div {
            display:flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2px;
        }
    `;