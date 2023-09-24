import styled from "styled-components"

export const ImputWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    gap: 4px;
    width: 80%;
    max-width: 400px;

    span {
        font-family: 'Yanone Kaffeesatz', sans-serif;
        font-size: 14px;
        color: var(--Hollywood-cerise);
        font-weight: 400;
        letter-spacing: 2px;

        @media (min-width: 760px) {
            font-size: 17px;
        }
    }
`;

    export const ImputLabelStyled = styled.label`
        font-family: 'Yanone Kaffeesatz', sans-serif;
        font-size: 18px;

        @media (min-width: 760px) {
            font-size: 22px;
        }
        
    `;

    export const ImputBoxStyled = styled.input`
        background: var(--Black-olive);
        border: none;
        border-radius: 6px;
        width: 100%;
        text-align: left;
        vertical-align: top;

        font-size: 15px;
        color: var(--Snow);

        @media (min-width: 760px) {
            font-size: 18px;
        }

        &:focus {
            border: solid 2px;
            border-color: red;
        }


        &.error {
            border: solid 1px;
            border-color: var(--Hollywood-cerise);
        }

        &.message {
            display: flex;
            height: 80px;
            text-align: left;
            align-items: flex-start;
            padding: 0;

            @media (min-width: 760px) {
                height: 120px;
            }
        }
    `;