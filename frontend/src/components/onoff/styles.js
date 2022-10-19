import styled from 'styled-components';

export const Tudo = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding-top:8%;
`;

export const ConteudoSecundario = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding-right: 2%;
    overflow-y: hidden;
`;

export const ConteudoSecundarioTitulo = styled.p`
    color: white;
    font-family: 'IBM Plex Sans';
    font-size: max(2.5vw , min(22px));
    text-align: right;
    font-family: 'Roboto', sans-serif;
`;

export const ConteudoSecundarioSubtitulo = styled.span`
    color: #A92364;
    font-family: 'IBM Plex Sans';
    font-size: max(2.5vw , min(22px));
    text-align: right;
    font-family: 'Roboto', sans-serif;
`;

export const TituloInstrucoes = styled.p`
    color: white;
    font-family: 'IBM Plex Sans';
    font-size: max(2vw , min(18px));
    text-align: right;
    font-family: 'Roboto', sans-serif;
    span{
        color: #A92364;
    }
`;

export const Linha = styled.hr`
    width: 0.3%;
    height: 100%;
    border: none;
    background-color: #F5E969;
`;

export const Imagem = styled.img`
    width: 13%;
    margin-left: 5%;
`;

export const SegundoConteudoSecundario = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
`;

export const SegundoConteudoSecundarioTitulo = styled.p`
    color: white;
    font-family: 'IBM Plex Sans';
    font-size: 2.5vw;
    text-align: center;
`;

export const DivBotoes = styled.div`
    padding-top: 4%;
`;

export const SwitchLabel = styled.label`
    position: relative;
    display: inline-block;
    width: 120px;
    height: 68px;
    margin-right: 10%;
`;

export const InputSwitch = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
`;

export const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
`;