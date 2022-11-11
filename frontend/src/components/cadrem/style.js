import styled from 'styled-components';

export const Cadastrar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 12%;
    text-align: center;
`;

export const Titulo = styled.div`
    color: white;
    font-family: 'Roboto';
    font-size:max(2.7vw , min(20px)); ;
    span {
        color: #A92364;
    }
`;

export const Section = styled.section`
    display:flex;
    justify-content: space-around;
    width:100%;
    @media (max-width:530px) {
        flex-direction: column;
    }
`;

export const Hr = styled.div`
    display:flex;
    width:7px;
    margin-top: 12%;
    background-color:#F5E969;
    @media (max-width:530px) {
        display: block;
        margin: auto;
        margin-top: 25px;
        width: 200px;
        height: 3px;
    }
`;