import styled from 'styled-components'

export const Search = styled.section`
    width: 100%;
    height: 9000px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: hidden;
    padding-top: 30%;
`;

export const SearchOption = styled.div`
    width: 80%;
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 50px;
    margin-bottom: 15vh;
    overflow-y: hidden;
    padding-left: 1%;
`;

export const Imagem = styled.img`
    width: 40px;
    margin-right: 15px;
    margin-left: 1.5%;
`;

export const Txt = styled.input`
    border: none;
    width: 100%;
    font-size: 2rem;
    height: 10vh;
    outline: none;
    padding-left: 1%;
    padding-right: 2%;
`;

export const Nomes = styled.div`
    width: 70%;
    height: 40vh;
    overflow-y: hidden;
    flex-direction: column;
    align-items: flex-start;
`;