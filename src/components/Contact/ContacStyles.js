import styled from  "styled-components"

export const ContactWrapperStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    width: 100%;
    padding: 20px;
    gap: 25px;
    margin-top: 15px;

    @media (min-width: 1040px) {
        padding: 40px;
    }


`;

    export const ContactTextBoxStyled = styled.div`
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
        text-align: center;
        width: 80%;


        h1 {
            font-family: 'Archivo Narrow', sans-serif;
            font-size: 30px;
            letter-spacing: 1px;
            margin: 0;

            @media (min-width: 1040px) {
                font-size: 45px;
            }
        }

        p {
            font-size: 15px;
            margin: 0;
            max-width: 550px;
            
            @media (min-width: 1040px) {
                font-size: 25px;
            }
        }
    `;





        

