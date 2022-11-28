import styled from 'styled-components'

export const Search = styled.section`
    width: 100%;
    height: 3000px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: hidden;
    margin-top: 20%;
    padding-top: 10%;
    @media (max-width:530px) {
        margin-top: 10%;
    }
`;

export const SearchOption = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 50px;
    box-shadow: 6px 7px 5px 3px rgba(0, 0, 0, 0.25);
    margin-bottom: 15vh;
    overflow-y: hidden;
    padding-left: 1%;
    @media (max-width:530px) {
        margin-bottom: 7vh;
        width: 92%;
    }
`;

export const Imagem = styled.img`
    min-width: 20px;
    max-width: 3vw;
    margin-right: 15px;
    margin-left: 1.5%;
`;

export const Txt = styled.input`
    border: none;
    width: 100%;
    font-size: max(2vw , min(18px));
    height: 5vw;
    min-height: 30px;
    outline: none;
    padding-left: 1%;
    padding-right: 2%;
`;

export const Nomes = styled.div`
    width: 80%;
    overflow-y: hidden;
    flex-direction: column;
    align-items: flex-start;
    li{ 
        display: flex;
        align-items:center;
        margin-bottom: 5px;
        padding-left:7px;
    }
    @media (max-width:530px) {
        width: 100%;
    }
    img{
        display: flex;
        max-width:20px;
    }
    div{
        display: flex;
    }
`;