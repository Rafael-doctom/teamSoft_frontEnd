import styled from "styled-components";


export const Container = styled.div`
    // display:block;
    width:80vw;
    margin:2rem auto;

    // display:none;

    @media (max-width:768px){
        // width:25vw;
    }

    @media (max-width:425px){
        width:90%;
    }

`;

export const FormWrapper = styled.div`

    @media (max-width:768px){
        display:flex;
        width:100%;
          flex-wrap:wrap;
      }

`

export const Posts = styled.div`
    display:flex;
    // justify-content:center;
    flex-wrap:wrap;
    width:85vw;
    align-items:center;
    margin:2rem 0;

    @media (max-width:1440px){
        width:85vw;
    }

    @media (max-width:768px){
      width:100%;
        flex-wrap:wrap;
    }
    
    @media (max-width:425px){
   width:100%;
        flex-wrap:wrap;
    }

    @media (max-width:375px){
     width:100%;
        flex-wrap:wrap;
    }
    @media (max-width:320px){
        width:100%;
        flex-wrap:wrap;
    }

    
`;

export const Products = styled.div`
    margin:1rem;
    display:flex;
    flex-direction:column;
    width:20vw;
    align-items:center;
    margin:1rem left;

    @media (max-width:768px){
        width:100%;
        // height:95vh;
    }

    @media (max-width:425px){
        text-align:left;
        width:100%;
        // height:80vh;

    }

    @media (max-width:375px){
       width:100%;
        // height:95vh;
    }

    @media (max-width:320px){
         width:100%;
        // height:160vh;
    }
  

`;

export const TitleProduct = styled.span`
    font-family: 'Roboto',sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.225rem;
    color: #4E4E4E;
    text-align:center;
    width:18vw;
    display:block;
    margin:1rem auto;

    @media (max-width:786px){
        text-align:center;
        width:100%;
    }

    @media (max-width:425px){
        text-align:center;
        width:100%;
    }

    @media (max-width:375px){
        font-size: 1.75rem;
   width:100%;
    }

    @media (max-width:320px){
        font-size: 2rem;
        width:100%;
    }
`;

export const Describe = styled.span`
    font-family: 'Roboto',sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 0.813rem;
    color: #4E4E4E;
    text-align:left;
    width:18vw;


    @media (max-width:768px){
         width:100%
    }

    @media (max-width:425px){
    width:100%
    }

    @media (max-width:375px){
        width:100%
        font-size: 0.913rem;
    }

    @media (max-width:320px){
       width:100%
        font-size: 1rem;
    }
`;

export const ImageProduct = styled.img`
    height:30vh;
    background-size:cover;
    width:18vw;

    border-radius:1rem;

    @media (max-width:768px){
        width:100%;
        height:33vh;
    }

    @media (max-width:375px){
    width:100%
        height:70vh;
    }

    @media (max-width:320px){
      width:100%
        height:80vh;
    }
`;


export const ButtonOpenModal = styled.button`
width:18vw;
    height:  4.7vh;
    max-eight: 5vh;
    border: 1px solid #4D3EFC;
    border-radius:4px;
    background: #4D3EFC;
    // padding:7px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: white;
    text-indent: 8px;
    transition: all .3s ease-out;
    -webkit-transition: all .3s ease-out;
    -moz-transition: all .3s ease-out;
    letter-spacing: 0.03rem;
    -webkit-appearance:none;

    cursor:pointer;

    &:focus{
        border: 1px solid #F09035;
        outline: 0;
    }

    @media (max-width:768px){
       width:100%;
    }
    margin:1rem 0;
   
    
   
`;

export const ButtonExluir = styled.button`
width:18vw;
    height:  4.7vh;
    max-eight: 5vh;
    border: 1px solid #4D3EFC;
    border-radius:4px;
    background: #4D3EFC;
    // padding:7px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: white;
    text-indent: 8px;
    transition: all .3s ease-out;
    -webkit-transition: all .3s ease-out;
    -moz-transition: all .3s ease-out;
    letter-spacing: 0.03rem;
    -webkit-appearance:none;

    cursor:pointer;

    &:focus{
        border: 1px solid #F09035;
        outline: 0;
    }

    @media (max-width:768px){
       width:100%;
    }
   
   
`;

export const Button = styled.button`
width:18vw;
    height:  4.7vh;
    max-eight: 5vh;
    border: 1px solid #4D3EFC;
    border-radius:4px;
    background: #4D3EFC;
    // padding:7px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: white;
    text-indent: 8px;
    transition: all .3s ease-out;
    -webkit-transition: all .3s ease-out;
    -moz-transition: all .3s ease-out;
    letter-spacing: 0.03rem;
    -webkit-appearance:none;

    cursor:pointer;

    &:focus{
        border: 1px solid #F09035;
        outline: 0;
    }

    @media (max-width:768px){
        display:none;
    }
   
`;



export const Input = styled.input`
    width: 10vw;
    height:  3vh;
    max-height:  3vh;
    border: 1px solid #4D3EFC;
    border-radius:4px;
    background: #FFFFFF;
    padding:7px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #656363;
    text-indent: 8px;
    transition: all .3s ease-out;
    -webkit-transition: all .3s ease-out;
    -moz-transition: all .3s ease-out;
    letter-spacing: 0.03rem;
    -webkit-appearance:none;

    margin: 0 0.25rem;
    
    &:focus{
        border: 1px solid #F09035;
        outline: 0;
    }

    @media (max-width:768px){
        width: 100%;
        margin:0.25rem 0;
    }
   
`;

export const Buttonadd = styled.button`
    width: 20vw;
    height:  4.7vh;
    max-eight: 5vh;
    border: 1px solid #4D3EFC;
    border-radius:4px;
    background: #4D3EFC;
    // padding:7px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: white;
    text-indent: 8px;
    transition: all .3s ease-out;
    -webkit-transition: all .3s ease-out;
    -moz-transition: all .3s ease-out;
    letter-spacing: 0.03rem;
    -webkit-appearance:none;

    cursor:pointer;

    &:focus{
        border: 1px solid #F09035;
        outline: 0;
    }

    @media (max-width:768px){
        // display:none;
        width: 100%;
    }
   
`;