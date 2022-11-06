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
    @media (max-width:768px) {
        padding-right: 15px;
    }
    @media (max-width:360px) {
        margin-top: 10px;
    }
`;

export const Titulo = styled.h1`
    font-family: 'Inter';
    font-size: max(2vw , min(17px));
    color: #EA7A67;
    text-align: right;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    @media (max-width:360px) {
        font-size: 14px;
    }
`;

export const Diario = styled.a`
    font-family: 'Inter';
    color: #A92364;
`;

