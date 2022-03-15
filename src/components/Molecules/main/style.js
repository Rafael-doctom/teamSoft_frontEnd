import styled from "styled-components";

export const Container = styled.div`
    display:block;
    width:80vw;
    margin:2rem auto;

    @media (max-width:1440px){
        width:92vw;
    }

    @media (max-width:768px){
        // width:25vw;
    }
    @media (max-width:425px){
        // width:95vw;
        // padding:1rem 0;
    }
`;

export const Posts = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    width:85vw;
    margin:2rem auto;

    @media (max-width:1440px){
        width:95vw;
    }

    @media (max-width:768px){
        width:90vw;
    }
    
    @media (max-width:425px){
        width:120vw;
        background:red;
        flex-wrap:wrap;
    }
`;

export const Products = styled.div`
    margin:1rem;
    display:flex;
    flex-direction:column;
    width:18vw;
    // min-width:18vw;
    // max-width:18vw;
    // justify-content:center;
    align-items:center;
    margin:0 auto;
    background:gray;

    @media (max-width:425px){
        text-align:left;
        width:35vw;
        background:green;
    }
`;

export const TitleProduct = styled.span`
    font-family: 'Roboto',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1.125rem;
    color: #4E4E4E;
    text-align:center;
    width:18vw;
    display:block;
    margin:1rem auto;

    @media (max-width:425px){
        text-align:left;
        width:35vw;
        background:white;
        // display:inline-block;
        
    }
`;

export const Describe = styled.span`
    font-family: 'Roboto',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    color: #4E4E4E;
    text-align:left;
    width:18vw;

    @media (max-width:425px){
        width:35vw;
    }

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
    
    @media (max-width:425px){
        width:35vw;
    }

`;