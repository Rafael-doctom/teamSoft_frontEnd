import styled from 'styled-components';

export const Container = styled.div`
    background: #F4F4F4;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);

    @media only screen and (max-width:425px){
        width:100%;
    }
`;

export const Navbar = styled.div`
    padding:0.87vw;
    width:90%;
    margin:0 auto;
    display:block;


    @media only screen and  (max-width:768px){
        margin:0;
        // width:100%;
    }

    @media (max-width:425px){
        <S.Profile onClick={openLogin}>
        // width:100%;

        padding-top:0.45rem;
        padding-bottom:0.45rem;
    }
    @media (max-width:425px){
        // width:100%;
    }
`;

export const Nav = styled.nav`
    display:flex;
    margin:0 auto;
    // justify-content:space-between;
    justify-content:space-between;


    @media (max-width:768px){
        width:100%;
    }

    @media (max-width:425px){
        width:100%; 
    }

    @media (max-width:375px){
        width:100%;
        // flex-wrap:wrap;
        
    }
`;



export const Logo = styled.img`
    width: 35%;
    height:100%;
    background-size:cover;

    @media (max-width:768px){
        width: 50%;
        height:100%;
    }

    @media (max-width:425px){
        width:100%;
        height: 100%;
    }

`;

export const Div = styled.div`
    display:flex;
    align-items:center;
    
  
`;


export const Span = styled.span`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.2px;
    color: #D80000;
`;

export const Adress = styled.p`
    font-family: 'Roboto',sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    color: #656363;
`;

export const SearchProducts = styled.div`
    margin-left: 1.40vw;

    @media (max-width:786px){
        display:none;
        margin:0;

        backgron:blue;
    }

`;

export const Input = styled.input`
    width: 20.7vw;
    height:  4vh;
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

    &:focus{
        border: 1px solid #F09035;
        outline: 0;
    }

    @media (max-width:768px){
        // display:none;
    }
   
`;

export const Profile = styled.div`
    display:flex;
    align-items:center;
    color: #ED3237;
    cursor:pointer;
    
    @media (min-width:1024px){
        margin-left:1.93vw;
    }
`;

export const ImageProfile = styled.img`
    width: 32px;
    height: 32px;
    
`;

export const Cart = styled.div`
    margin-left:1.93vw;
    display:flex;
    align-items:center;
    color: #ED3237;
    cursor:pointer;

`;

export const ImageCar = styled.img`
    width: 32px;
    height: 32px;

`;