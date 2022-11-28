import styled from "styled-components";

export const Modal = styled.section`
    background: #fff;
    border: 2px solid #A92364;
    position: absolute;
    border-radius: 10px;
    overflow-y: scroll;
    animation-duration: 2.5s;
    animation: animacao-modal 2s;
`;

export const BotaoModal = styled.input`
    background-color: #EA7A67;
    color: #fff;
    border: none;
    padding: 0.5%;
    border-radius: 10px;
    font-family: 'IBM Plex Sans';
    font-size: max(1.7vw, min(20px));
    cursor: pointer;
`;

export const BotaoFecharModal = styled.button`
    background-color: transparent;
    color: #A92364;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    text-align: right;
    margin: 1%;
`;

export const Container = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    padding-top: 1%;
`;

export const Paragrafo = styled.p`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #A92364;
    font-size: max(1.5vw, min(15px));
    font-family: 'IBM Plex Sans';
    padding-bottom: 2%;
    padding-left: 5%;
    padding-top: 2%;
`;

export const Escola = styled.p`
    font-family:  'IBM Plex Sans';
    font-size: 1.3rem;
    color: rgba(169, 35, 100, 0.7);
    padding-left: 5%;
`;