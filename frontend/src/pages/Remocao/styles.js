import styled from "styled-components"

export const DivPrincipal = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const DivLista = styled.form`
    width: 80%;
    height: 70%;
    background: #FFFFFF;
    border-radius: 0px 66px;
    overflow-y: hidden;
    @media (max-width:768px) {
        width: 100%;
        margin-left: 0%;
        height: 80%;
    border-radius: 0px 66px 0px 0px

    }
`

export const PosicaoTitulo = styled.div`
    width: 80%;
    display: flex;
    align-items: flex-start;
    @media (max-width:768px) {
        width: 90%;
    }
`;

export const Titulo = styled.form`
    font-size: max(3vw , min(25px));
    color: white;
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 500;
    line-height: 91px;
    color: #FFFFFF;
`;
