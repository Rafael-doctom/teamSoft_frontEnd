import styled from "styled-components";

export const Container = styled.div`
    display:block;
    width:80vw;
    margin:2rem auto;

    @media (max-width:1440px){
        width:92vw;
        background:red;
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
    // justify-content:center;
    flex-wrap:wrap;
    width:85vw;
    align-items:center;
    margin:2rem auto;
    @media (max-width:1440px){
        width:85vw;
        background:green;
    }

    @media (max-width:768px){
        width:90vw;
        flex-wrap:wrap;
    }
    
    @media (max-width:425px){
        width:130vw;
        flex-wrap:wrap;
    }

    @media (max-width:375px){
        width:140vw;
        flex-wrap:wrap;
    }
    @media (max-width:320px){
        width:165vw;
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
    margin:1rem auto;
    height:70vh;

    @media (max-width:768px){
        width:40vw;
        height:95vh;
        // max-height:120vh;
        background:white;
    }

    @media (max-width:425px){
        text-align:left;
        width:55vw;
        height:80vh;
    }
    @media (max-width:375px){
        width:90vw;
        height:95vh;
    }

    @media (max-width:320px){
        width:150vw;
        height:160vh;
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
        text-align:center;
        width:55vw;
        background:red;
    }

    @media (max-width:375px){
        font-size: 1.75rem;
        width:80vw;
    }

    @media (max-width:320px){
        font-size: 2rem;
        width:110vw;
        color:white;
    }
`;

export const Describe = styled.span`
    font-family: 'Roboto',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 0.813rem;
    color: #4E4E4E;
    text-align:left;
    width:18vw;


    @media (max-width:768px){
        width:30vw;
    }

    @media (max-width:425px){
        width:55vw;
    }

    @media (max-width:375px){
        width:80vw;
        font-size: 0.913rem;
    }

    @media (max-width:320px){
        width:120vw;
        font-size: 1rem;
    }
`;

export const ImageProduct = styled.img`
    height:30vh;
    background-size:cover;
    width:18vw;

    @media (max-width:768px){
        width:30vw;
        height:33vh;
    }

    @media (max-width:375px){
        width:65vw;
        height:70vh;
    }

    @media (max-width:320px){
        background:blue;
        width:120vw;
        height:80vh;
    }
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

    @media (max-width:375px){
        width:90vw;
    }

    @media (max-width:320px){
        width:120vw;
    }
`;