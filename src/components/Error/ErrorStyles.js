import styled from "styled-components"

export const ErrorWrapperStyled = styled.section`
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

    export const ErrorBoxStyled = styled.div` 
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
        text-align: center;
        width: 60%;
        gap: 20px;
        background: var(--Black);
        border-radius: 1rem;
        padding: 50px 20px;
        margin: 80px 0;

        h2 {
            font-family:'Archivo Narrow', sans-serif; 
            font-size: 35px;
            font-weight: 800;
            padding: 0;
            margin: 0;
            color: var(--Hollywood-cerise);

            @media (min-width: 760px) {
                font-size: 45px;
            }
        }

        p {
            font-family: 'Yanone Kaffeesatz', sans-serif; 
            font-size: 20px;
            font-weight: 200;
            padding: 0;
            margin: 0;
            

            @media (min-width: 760px) {
                font-size: 30px;
            }
        }

        button {
            background-color: var(--Verdigris);
            color: var(--Black);
        }
    `;