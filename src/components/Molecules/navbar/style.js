import styled from 'styled-components';
import { Arrow } from '../../Atoms/images';

export const Navbar = styled.div`
    padding:15px;
    background: #F4F4F4;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`;

export const Nav = styled.nav`
    display:flex;
    margin:0 auto;
    width:72vw; //(1280px - 40px = 72vw)
`;


export const Logo = styled.img`
    width: 225.23px;
    height: 70px;
    background-size:cover;
`;

export const Div = styled.div`
    display:flex;
    margin-left:7vw;
    align-items:center;
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
    width: 354px;
    height: 48px;
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
    letter-spacing: 0.33px;
    -webkit-appearance:none;
    &:focus{
        border: 1px solid #ED3237;
        outline: 0;
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