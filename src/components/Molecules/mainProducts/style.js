import styled from "styled-components";

export const Posts = styled.div`
    display:flex;
    justify-content:space-between;
    width:70vw;
    margin:2rem auto;
`;

export const ResultProduct = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:48px;
`;
export const TitleProduct = styled.span`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    color: #4E4E4E;
    margin-top:10px;
`;

export const Describe = styled.span`
font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 20px;
color: #4E4E4E;
margin-top:10px;
width:730px;
`;

export const DivValues = styled.div`
    display:flex;
    margin-top:10px;
`;

export const Value = styled.span`
font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 32px;
align-items: center;
color: #DC6E05;
`;

export const BeforeValue = styled.span`
font-family: 'Roboto',sans-serif;
font-style: normal;
font-weight: 400;
font-size: 32px;
text-decoration-line: line-through;
color: #4E4E4E;
margin-left:17px;
`;

export const ImageProduct = styled.img`
width: 597px;
height: 388px;
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

export const Somar = styled.div`
    width: 439px;
    height: 660px;
    border: 1px solid #686868;
    box-sizing: border-box;
    border-radius: 8px;
    overflow: auto;
`;

export const Card = styled.div`
    padding:2rem;
`;

export const Infos = styled.div`
    width: 350px;
    height: 55px;
    background: rgba(253, 215, 14, 0.2);
    display:flex;
    flex-direction:column;
    padding:8px ;
`;

export const Ingredients = styled.span`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    color: #4E4E4E;
    padding-top:8px;
`;

export const Span = styled.span`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #E49700;
    padding-top:8px;
`;

export const Teste = styled.div`
    width: 350px;
    height: 90px;
    background: #FFFFFF;
    padding:8px;
    margin-top:15px;
    display:flex;
    flex-direction:column;
    position:relative;
    border-bottom: 1px solid #E8A634;
`;

export const IngredientTitle = styled.span`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #4E4E4E;
`;

export const ValueIngredient = styled.span`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #F09035;
    margin-top:45px;
`;

export const FloatSum = styled.div`
    width: 89px;
    height: 32px;
    right: 0px;
    top: calc(30%);
    position:absolute;
    background: #FFFFFF;
    border: 1px solid #F09035;
    box-sizing: border-box;
    border-radius: 5px;
    display:flex;
    align-items:center;
    padding:0 0.20rem;
`;

export const Buttons = styled.button`
    border:0;
    background:transparent;
    padding:0 1rem;
`;