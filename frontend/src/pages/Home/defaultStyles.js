import styled from "styled-components";

export const Principal = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    background: #EA7A67;
    border-radius: 10vw 0px 0px 0px;
    width: 100%;
    height: 100%;
    margin-top: 12%;
    
    @media (max-width: 600px) {
        margin-top:88px
    }
`;

// export const conteudoPrincipal = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding-top: 20%;
//     width: 100%;
// `;

export const BackButton = styled.button`
    overflow-y: hidden;
    width: 50px;
    height: 50px;
    background: #A92364;
    cursor: pointer;
    border: none;
    border-radius: 20px;
    display: flex;
    `;

export const Icon = styled.span`
    padding-top:10px;
    padding-left: 10px;
    color: #fff;
    font-size: 30px;
`;

export const DivButton = styled.a`
    overflow-y: hidden;
    position:fixed;
    bottom: 8px;
    right: 8px;
`;
