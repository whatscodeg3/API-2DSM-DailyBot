import styled from 'styled-components'

export const DivFundo = styled.header`
    margin-top: 1%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-right:65px;
    img{
        min-width: 120px;
        max-width:20vw;
        margin-left: 3%;
    }

`;

export const Titulo = styled.h1`
    font-family: 'Inter';
    font-size: max(2vw , min(17px));
    color: #EA7A67;
    text-align: right;
    width: 100%;
    font-family: 'Roboto', sans-serif;
`;

export const Diario = styled.a`
    font-family: 'Inter';
    color: #A92364;
`;

