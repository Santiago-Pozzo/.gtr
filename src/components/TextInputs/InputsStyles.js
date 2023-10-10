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
        padding: 1px 5px;
        text-align: left;
        vertical-align: top;

        font-size: 15px;
        color: var(--Snow);

        @media (min-width: 760px) {
            font-size: 18px;
            padding: 1px 8px;
        }

        &:focus {
            border: solid 2px;
            border-color: red;
        }


        &.error {
            border: solid 1px;
            border-color: var(--Hollywood-cerise);
        }
    `;

    export const MessageInputBoxStyled = styled.textarea`
        background: var(--Black-olive);
        border: none;
        border-radius: 6px;
        width: 100%;
        height: 80px;
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

    align-items: flex-start;
    padding: 5px;

    @media (min-width: 760px) {
        height: 120px;
        padding: 8px;
    }
    `;