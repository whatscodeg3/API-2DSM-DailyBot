import styled from "styled-components";

export const TituloPesquisa = styled.li`
    color: rgb(255, 255, 255);
    font-family: 'IBM Plex Sans';
    font-size: 2vw;
    padding-bottom: 2%;
    cursor: pointer;
    overflow-y: hidden;
    display: flex;
    padding-top: 10px;
`
export const BotaoModal = styled.input`
    background-color: #EB2626;
    color: #fff;
    border-radius: 10px;
    font-family: 'IBM Plex Sans';
    font-size: 25px;
    padding: 15px;
    cursor: pointer;
    margin-right: 1%;
    border: none;
    @media (max-width: 650px) {
        display: none;
    }
`;

export const BotaoModalInput = styled.div`
    cursor: pointer;
    font-size: max(4vw ,min(30px));
    z-index: 1;
    color: red;
    display: none;
    @media (max-width: 650px) {
        display: flex;
    }
`;

export const Ul_class = styled.ul`
    width: 100%;
    height: 100%;   
    a {
        padding-left: 10px;
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












