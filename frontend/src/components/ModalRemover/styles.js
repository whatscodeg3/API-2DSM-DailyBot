import styled from 'styled-components'


export const BotaoExcluir = styled.button`
    color: #fff;
    border: none;
    font-size: 25px;
    padding: 15px;
    cursor: pointer;
    text-align: center;
    margin-bottom: 0.5%;
    background: #EB2626;
    box-shadow: 1px 1px 2px 3px rgba(0, 0, 0, 0.35);
    border-radius: 10px;
`;

export const BotaoCancelar = styled.button`
    color: #fff;
    border: none;
    font-size: 25px;
    cursor: pointer;
    text-align: center;
    padding: 15px;
    background: #26D04C;
    box-shadow: 1px 1px 2px 3px rgba(0, 0, 0, 0.35);
    border-radius: 10px;
`;

export const ModalTexto = styled.p`
    background-color: transparent;
    color: #A92364;
    border: none;
    font-size: 40px;
    cursor: pointer;
    text-align: center;
    margin-bottom: 5%;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BotaoModal = styled.input`
    background-color: #EB2626;
    color: #fff;
    padding: 0.5%;
    border-radius: 10px;
    font-family: 'IBM Plex Sans';
    font-size: 25px;
    cursor: pointer;
    width: 13%;
    margin-right: 1%;
`;

export const Modal = styled.div`
    background: #fff;
    border: 2px solid #A92364;
    position: absolute;
    border-radius: 20px;
    overflow-y: scroll;
    animation-duration: 2.5s;
    animation: animacao-modal 2s;
    display: none;
    z-index: 2;
    box-sizing: border-box;
    padding: 2%;
    font-family: 'IBM Plex Sans';
    overflow-y: hidden;
`;