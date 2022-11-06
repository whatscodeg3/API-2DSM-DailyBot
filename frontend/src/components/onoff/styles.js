import styled from 'styled-components';

export const Tudo = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding-top:8%;
    @media (max-width:600px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50%;
    }
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

export const Imagem = styled.img`
    display: flex;
    width: 13%;
    margin-left: 5%;
    @media (max-width:600px) {
        display: none;
    }
`;

export const ImagemRes = styled.img`
    display: none;
    width: 13%;
    margin-left: 5%;
    @media (max-width:600px) {
        display: flex;
    }
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