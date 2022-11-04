import styled from "styled-components";

export const TituloPesquisa = styled.li`
    color: rgb(255, 255, 255);
    font-family: 'IBM Plex Sans';
    font-size: 2vw;
    padding-bottom: 2%;
    cursor: pointer;
    overflow-y: hidden;
`
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
    border: none;
`;

export const Ul_class = styled.ul`
    width: 100%;
    height: 100%;   
    a {
        color: #A92364;
        font-family: 'IBM Plex Sans';
        font-size: max(2vw , min(20px));
        cursor: pointer; 
        overflow-y: hidden;
    }
    &::-webkit-scrollbar {
        width: 9px;
        background-color: #fff;
    }
    &::-webkit-scrollbar-track-piece {
        border-right: 2px solid #fff;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #A92364;
        border-radius: 20px;
        padding-right: 2%;
    }
`












