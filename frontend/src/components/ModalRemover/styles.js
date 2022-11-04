import styled from 'styled-components'


export const BotaoExcluir = styled.button`
    color: #fff;
    border: none;
    font-size: 30px;
    cursor: pointer;
    text-align: center;
    margin-left: 24%;
    margin-bottom: 0.5%;
    width: 30%;
    height: 25%;
    background: #EB2626;
    box-shadow: 1px 1px 2px 3px rgba(0, 0, 0, 0.35);
    border-radius: 10px;
`;

export const BotaoCancelar = styled.button`
    color: #fff;
    border: none;
    font-size: 30px;
    cursor: pointer;
    text-align: center;
    margin-left: 8%;
    width: 30%;
    height: 25%;
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
    flex-wrap: wrap;
    justify-content: flex-end;
    padding-top: 1%;
    padding-right: 10%;
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
    width: 60%;
    height: 50%;
    border-radius: 20px;
    overflow-y: scroll;
    animation-duration: 2.5s;
    animation: animacao-modal 2s;
    display: none;
    box-sizing: border-box;
    padding: 2%;
    font-family: 'IBM Plex Sans';
    overflow-y: hidden;
`;