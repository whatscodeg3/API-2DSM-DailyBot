import styled from 'styled-components';

export const ConteudoPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 1%;
    overflow: scroll;
    width: 100%;
    height: 100%;
    gap: 1%;
`;

export const Details = styled.details`
    background-color: #EA7A67;
    color: white;
    font-size: 2rem;
    border-radius: 15px;
`;

export const Summary = styled.summary`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 5%;
    padding-right: 5%;
    font-weight: 400;
    text-decoration: none;
    cursor: pointer;
    &::marker {
        color: #EA7A67;
    }
`;

export const DivInput = styled.div`
    padding-top: 0.5%;
    padding-bottom: 0.5%;
    display: flex;
    width: 25%;
    gap: 10%;
`;

export const InputButton = styled.input`
    background: #FFFFFF;
    color: #EA7A67;
    border: 5px solid #EA7A67;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    color: #EA7A67;
    font-weight: 600;
    padding: 3%;
    font-size: 1.7rem;
    align-items: center;
    cursor: pointer;
`;

export const Trecho = styled.p`
    color: #fff;
    padding: 5%;
`;

export const Linha = styled.hr`
    background-color: #fff;
    padding: 0.1%;
    width: 90%;
    border-radius: 15px;
`;

export const ConteudoDatails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 0.5%;
`;

export const BackButton = styled.button`
    overflow-y: hidden;
    width: 50px;
    height: 50px;
    background: #A92364;
    cursor: pointer;
    border: none;
    border-radius: 20px;
    display: flex;
    `;

export const Icon = styled.span`
    padding-top:10px;
    padding-left: 10px;
    color: #fff;
    font-size: 30px;
`;

export const DivButton = styled.a`
    overflow-y: hidden;
    position:fixed;
    bottom: 8px;
    right: 8px;
`;
