import styled from "styled-components";

export const Bar = styled.aside`
    padding-top:10px;
    position:fixed;
    right:0px;
    width: 50px;
    height:100%;
    background-color: #A92364;
    z-index:1;
    display:flex;
    flex-direction: column;
    justify-content:space-between;

    img{
        padding-left:5px;
        width: 45px;    
    }

`;

export const Icon = styled.span`
    padding-top:10px;
    padding-left: 10px;
    color: #fff;
    font-size: 30px;
`;

export const DivButton = styled.a`
    margin-bottom: 15px;
    background: #A92364;
    cursor: pointer;
    border: none;
    display: flex;
`;
