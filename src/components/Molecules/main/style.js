import styled from "styled-components";

export const Posts = styled.div`
    display:flex;
    justify-content:center;
    // padding:1rem;
    flex-wrap:wrap;
    width:85vw; //(1280px - 40px = 72vw)
    margin:0 auto;
`;

export const Products = styled.div`
    // margin:2rem auto;
    margin:1rem;
    display:flex;
    flex-direction:column;
`;

export const TitleProduct = styled.span`
    font-family: 'Roboto',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #4E4E4E;
    text-align:center;
`;

export const Describe = styled.span`
    font-family: 'Roboto',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    color: #4E4E4E;
    text-align:left;
`;

export const ImageProduct = styled.img`
    height:25vh;
    background-size:cover;
`;

export const Button = styled.button`
    height: 40px;
    background: #F09035;
    border:0;
    cursor:pointer;
`;