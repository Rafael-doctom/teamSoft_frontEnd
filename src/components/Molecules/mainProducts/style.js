// import styled from "styled-components";
import styled, { keyframes } from "styled-components";

// export const TesteBOtao = styled.div`
//     display:none;

//     @media (max-width:1440px){
//         display:none;
//     }

//     @media (max-width:768px){
//         display:none;

//     }
//     @media (max-width:425px){
//         display:block;

//     }
// `;
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
    margin-top:10px;
    color: #4E4E4E;
   
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
    position:relative;
    padding:1rem;
    height:620px;
    border: 1px solid #686868;
    box-sizing: border-box;
    border-radius: 8px;
    width: 439px;

`;

export const DivSubmit = styled.div`
    position:absolute;
    bottom:20px;
    left:30px;
    margin: 0 auto;
    width:380px;
    z-index:999;
    display:flex;
`;

export const ButtonsAddWithProduct = styled.button`
  width: 150px;
  height: 40px;
  background: white;
  border: 1px solid #F09035;
  box-sizing: border-box;
  border-radius: 8px;
  display:flex;
  align-items:center;
  margin-right:5px;
`;

export const ButtonAdded = styled.button`
    background:#E49700;
    width:220px;
    z-index:999;
    height: 40px;
    border: 0;
    box-sizing: border-box;
    border-radius: 8px;
    color:white;
    font-weight:600;
    cursor:pointer;
    
    &:hover{
      background:red;
      transition: all .3s ease-out;
      -webkit-transition: all .3s ease-out;
      -moz-transition: all .3s ease-out;
      letter-spacing: 0.02rem;
      -webkit-appearance:none;
  }
`;

export const ButtonsValue = styled.button`
    border:0;
    background:transparent;
    padding:0 1.55rem;
    font-size:2rem;
    color:#E49700;
`;
export const Card = styled.div`
    padding:1rem;
    position:relative;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 0px;
    }
    width: 439px;
    height:500px;
`;

export const Infos = styled.div`
    width: 350px;
    height: 50px;
    background: rgba(253, 215, 14, 0.2);
    display:flex;
    flex-direction:column;
    padding:8px;
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
    height: 80px;
    background: #FFFFFF;
    // background: green;

    padding:8px;
    margin-top:10px;
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
    margin-top:5px;
`;

export const RequestedInfo = styled.div`
    width: 350px;
    height: 40px;
    background: rgba(253, 215, 14, 0.2);
    display:flex;
    flex-direction:column;
    padding:8px;
`;


export const DivCheck = styled.div`
    width: 350px;
    height: 35px;
    display:flex;
    flex-direction:column;
    padding:8px;
    margin-top:0px;
    position:relative;
    margin-bottom:10px;
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

export const Modal = styled.div`
  background:white;
  top:80px;
  right:150px;
  position:absolute;
  width:280px;
  height:200px;
  border-radius:8px;
  border: 0;
  box-sizing: border-box;
  -webkit-box-shadow: 2px 3px 21px -6px #000000; 
  box-shadow: 2px 3px 21px -6px #000000;
`;

export const TitleSucess = styled.span`
  display:block;
  background: #F09035;
  color:white;
  font-size:1.25rem;
  padding:10px 0.44rem;
  text-align:left;
  border:0;
  border-top-left-radius:5px;
  border-top-right-radius:5px;
  font-weight:600;
`;

export const IngredientTitleAdded = styled.span`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    display:block;
    color: red;
    margin:10px 0.44rem;
`;

export const ListIngredients = styled.span`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    display:block;
    color: #4E4E4E;
    margin:10px 0.44rem;
`;

export const List = styled.ul`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    display:block;
    color: #4E4E4E;
    // margin:10px 0.44rem;
`;