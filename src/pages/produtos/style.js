import styled from "styled-components";

export const Posts = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    width:84vw;
    margin:2rem auto;
`;

export const Products = styled.div`
    margin:1rem;
    display:flex;
    flex-direction:column;
    width:18vw;
    min-width:18vw;
    max-width:18vw;
    justify-content:center;
    align-items:center;
`;

export const TitleProduct = styled.span`
    font-family: 'Roboto',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #4E4E4E;
    text-align:center;
    width:18vw;
    display:inline-block;
    margin:1rem auto;
`;

export const Describe = styled.span`
    font-family: 'Roboto',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    color: #4E4E4E;
    text-align:left;
    width:18vw;

`;

export const ImageProduct = styled.img`
    height:30vh;
    background-size:cover;
    width:18vw;
`;

export const Button = styled.button`
    height: 40px;
    width:18vw;
    background: #F09035;
    border:0;
    cursor:pointer;
    color:white;
    font-weight:700;
    font-size:0.90rem;
    letter-spacing:0.1rem;

    &:hover{
        background:red;
        transition: all .3s ease-out;
        -webkit-transition: all .3s ease-out;
        -moz-transition: all .3s ease-out;
        letter-spacing: 0.02rem;
        -webkit-appearance:none;
    }
`;