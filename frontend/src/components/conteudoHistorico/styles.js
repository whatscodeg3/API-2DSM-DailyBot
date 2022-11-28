import styled from 'styled-components';

export const ConteudoPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 1%;
    overflow: scroll;
    width: 100%;
    gap: 10px;
`;

export const Details = styled.details`
    display: flex;
    background-color: #EA7A67;
    color: white;
    font-size: max(2vw , min(20px));
    border-radius: 15px;
`;

export const Summary = styled.summary`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 2%;
    padding-right: 2%;
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
    gap: 15px;
`;

export const InputButton = styled.input`
    background: #FFFFFF;
    color: #EA7A67;
    border: 5px solid #EA7A67;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    color: #EA7A67;
    font-weight: 600;
    padding: 6px;
    font-size: max(1.7vw, min(15px));
    align-items: center;
    cursor: pointer;
    @media (max-width:768px) {
        border: 2px solid #EA7A67;
    }
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

