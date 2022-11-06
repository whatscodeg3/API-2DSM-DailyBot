import styled from "styled-components";

export const Menu = styled.div`
    width: 100%;
`;

export const ScrollStyle = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding-top: 1.5%;
    text-align: center;
    @media (max-width:500px) {
        display: none;
    }
`;

export const Icon = styled.span`
    color: white;
    font-size: max(2vw , min(17px));
    margin-right: 0.5vw;
`;

export const Li = styled.li`
    display: flex;
    align-items: center;
`;


export const Subtitulo = styled.a`
    font-family: 'IBM Plex Sans';
    color: white;
    font-size: max(2vw , min(18px));
    font-family: 'Roboto', sans-serif;
`;