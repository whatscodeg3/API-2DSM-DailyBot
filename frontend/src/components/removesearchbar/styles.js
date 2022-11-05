import styled from 'styled-components'

export const Search = styled.section`
    width: 120%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
    padding-top: 3%;
    padding-left: 3%;
`;

export const SearchOption = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 50px;
    box-shadow: 2px 3px 3px 2px rgba(0, 0, 0, 0.25);
    margin-bottom: 5%;
    overflow-y: hidden;
    padding-left: 1%;
`;

export const Imagem = styled.img`
    min-width: 30px;
    max-width: 3vw;
    margin-right: 15px;
    margin-left: 1.5%;
`;

export const Txt = styled.input`
    border: none;
    width: 100%;
    font-size: max(2vw , min(20px));
    height: 10vh;
    outline: none;
    padding-left: 1%;
    padding-right: 2%;
`;

export const Nomes = styled.div`
    width: 80%;
    overflow-y: hidden;
    flex-direction: column;
    align-items: flex-start;
    overflow-y: hidden;
`;