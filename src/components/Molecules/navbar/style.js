import styled from 'styled-components';
import { Arrow } from '../../Atoms/images';

export const Container = styled.div`
    width:100%;
    background: #F4F4F4;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);

    @media (max-width:1440px){

    }

    @media (max-width:1024px){

    }

    @media (max-width:768px){

    }
    @media (max-width:425px){

    }

`;

export const Navbar = styled.div`
    padding:0.87vw;
    width:80vw;
    margin:0 auto;
    display:block;
    // background: #F4F4F4;

    @media (max-width:1440px){
        width:90vw;
        background:gray;
    }


    @media (max-width:768px){
        // width:95vw;
    }

    @media (max-width:425px){
        
    }

`;

export const Nav = styled.nav`
    display:flex;
    margin:0 auto;
    justify-content:space-between;

    @media (max-width:768px){
        width:95vw; 
        // flex-wrap:wrap;
    }

    @media (max-width:425px){
        width:90vw; 
        flex-wrap:inherit;
    }
`;



export const Logo = styled.img`
    width: 221.91px;
    height: 70.2px;
    background-size:cover;

    @media (max-width:1440px){

    }

    @media (max-width:768px){
        width: 100px;
        height: 70.2px;
    }
    
    

`;

export const Div = styled.div`
    display:flex;
    margin-left:7vw;
    align-items:center;

    @media (max-width:768px){
        margin-left:0;

    }
`;

export const DeliveryInfos = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding:10px;
    position:relative;
    width: 230px;
    height: 48px;
    cursor:pointer;
    &:before {
        content:url(${Arrow});
        position:absolute;
        right:20px;
        top:30%
    }

    @media (max-width:768px){
        width: 150px;
        height: 48px;
    }
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
`;

export const Input = styled.input`
    width: 20.7vw;
    height:  6.15vh;
    border: 1px solid #ED3237;
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
        width: 20.7vw;
    }
   
`;

export const Profile = styled.div`
    margin-left:1.93vw;
    display:flex;
    align-items:center;
    color: #ED3237;
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

`;

export const ImageCar = styled.img`
    width: 32px;
    height: 32px;

`;