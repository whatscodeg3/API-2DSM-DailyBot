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
    @media (max-width:768px) {
        padding-top:0px;
        bottom: 0;
        height: 50px;
        width: 100%;
        flex-direction: row;
        header {
            width: 100%;
            display: flex;
            justify-content: center;
            gap: 5vw;
            overflow-y: hidden;
        }
        img{
            padding-top:10px;
            margin-right: 10px;
        }
    }
`;


export const Icon = styled.span`
    padding-top:10px;
    padding-left: 10px;
    color: #fff;
    font-size: 30px;
`;

export const IconAtalho = styled.span`
    padding-top:10px;
    padding-left: 11px;
    color: #fff;
    font-size: 30px;
`;

export const IconExit = styled.span`
    padding-top:10px;
    padding-left: 14px;
    color: #fff;
    font-size: 30px;
`;

export const DivButton = styled.button`
margin-bottom: 15px;
background: #A92364;
cursor: pointer;
border: none;
display: flex;
@media(max-width: 768px) {
    height: 100%
}`

export const DivButton2 = styled.a`
margin-bottom: 15px;
background: #EA7A67;
cursor: pointer;
border:none;
display:flex;
@media(max-width: 768px) {
    height:100%
}
`;
