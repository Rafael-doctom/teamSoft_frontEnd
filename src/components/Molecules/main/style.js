import styled from "styled-components";

export const Container = styled.div`
    display:block;
    width:80vw;
    margin:2rem auto;

    // display:none;
    @media (max-width:768px){
        // width:25vw;
    }
    @media (max-width:425px){
        // width:95vw;
        // padding:1rem 0;
    }
`;

export const FormWrapper = styled.div`

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
        width:80vw;
        flex-wrap:wrap;
    }
    
    @media (max-width:425px){
        width:60vw;
        flex-wrap:wrap;
    }

    @media (max-width:375px){
        width:50vw;
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
    align-items:center;
    margin:1rem left;

    @media (max-width:768px){
        width:40vw;
        height:95vh;
    }

    @media (max-width:425px){
        text-align:left;
        width:55vw;
        height:80vh;
    }
    @media (max-width:375px){
        width:50vw;
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
    font-weight: 700;
    font-size: 1.225rem;
    color: #4E4E4E;
    text-align:center;
    width:18vw;
    display:block;
    margin:1rem auto;

    @media (max-width:425px){
        text-align:center;
        width:55vw;
    }

    @media (max-width:375px){
        font-size: 1.75rem;
        width:60vw;
    }

    @media (max-width:320px){
        font-size: 2rem;
        width:110vw;
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

    border-radius:1rem;

    @media (max-width:768px){
        width:30vw;
        height:33vh;
    }

    @media (max-width:375px){
        width:65vw;
        height:70vh;
    }

    @media (max-width:320px){
        width:120vw;
        height:80vh;
    }
`;

// export const Button = styled.button`
//     height: 40px;
//     width:18vw;
//     background: #F09035;
//     border:0;
//     cursor:pointer;
//     color:white;
//     font-weight:700;
//     font-size:0.90rem;
//     letter-spacing:0.1rem;

//     &:hover{
//         background:red;
//         transition: all .3s ease-out;
//         -webkit-transition: all .3s ease-out;
//         -moz-transition: all .3s ease-out;
//         letter-spacing: 0.02rem;
//         -webkit-appearance:none;
//     }

//     @media (max-width:425px){
//         width:35vw;
//     }

//     @media (max-width:375px){
//         width:90vw;
//     }

//     @media (max-width:320px){
//         width:120vw;
//     }
// `;



// 


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
        display:none;
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
        display:none;
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
        display:none;
    }
   
`;