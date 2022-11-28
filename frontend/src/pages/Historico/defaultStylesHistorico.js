import styled from "styled-components";

export const Principal = styled.section`
    width: 90%;
    height: 80vh;
    border-radius: 0px 66px;
    background-color: #fff;
    padding-left: 2%;
    padding-right: 2%;
    padding-top: 1%;
    padding-bottom: 1%;
    overflow-y: scroll;
    overflow-x: hidden;
    margin: auto;
    @media (max-width:768px) {
        border-radius: 0px 10vw 0px 0px;
        width: 100%;
        height: 87vh;
    }
`;

