// import styled from "styled-components";
import styled, { keyframes } from "styled-components";


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

export const AsRequest = styled.div`
    margin-top:15px;
`;


export const RequestedInfo = styled.div`
    width: 350px;
    height: 55px;
    background: rgba(253, 215, 14, 0.2);
    display:flex;
    flex-direction:column;
    padding:8px ;
`;


export const DivCheck = styled.div`
    width: 350px;
    height: 55px;
    // background: white;
    display:flex;
    flex-direction:column;
    padding:8px ;
    margin-top:5px;
    position:relative;
`;

export const RequestQuestion = styled.span`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    color: #4E4E4E;
    padding-top:8px;
`;

export const Label = styled.label`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    color: #4E4E4E;
    padding-top:8px;
`;

const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

const popIn = keyframes`
    from {
    opacity: 0;
        transform: translate(-50%, -50%) scale(1.5) ; 
    }
    to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1) ;*/
    }
`;

const Label2 = styled.label`
  position: relative;
  display: inline-block;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  margin: 0.6em 1em;
  font-size: 24px;
  position:absolute;
  right:0px;
`;

const Indicator = styled.div`
  border: 1px solid #F09035;
  border-radius: 20px;   
  width: 20px;
  height: 20px;
  position: absolute;
  top: -10px;
//   left: -1.5em;
//   ${Label}:hover & {
//     background: #ccc;
//   }

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    // border: solid #263238;
    background-color: #F09035;
    border-radius: 10px;
    width:10px;
    height: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-name: ${popIn};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  ${Input}:disabled + & {
    pointer-events: none;
    opacity: 0.6;
    background: #e6e6e6;
  }
`;

export default function RadioButton({
  value,
  onChange,
  name,
  id,
  label,
  disabled,
  checked
}) {
  return (
    <Label2 htmlFor={id} disabled={disabled}>
      {label}
      <Input
        type="radio"
        role="radio"
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
        checked={checked}
      />
      <Indicator />
    </Label2>
  );
}
