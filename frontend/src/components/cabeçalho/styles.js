import styled from "styled-components";


export const CabecalhoHistorico = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 3%;
    color: #A92364;
    font-size: max(2.2vw , min(20px));;
    font-family: 'IBM Plex Sans';
    padding-bottom: 0.5%;
`;

export const SubtituloCabecalho = styled.span`
    color: rgba(169, 35, 100, 0.7);
    font-weight: 600;
    font-family: 'IBM Plex Sans';
`;

export const ParagrafoNome = styled.span`
    font-family: 'Roboto';
    font-weight: 600;
    color: #A92364;
`;