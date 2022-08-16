import styled from "styled-components";

export const Content = styled.div`
    background:white;
    position:absolute;
    width:25vw;
    heigh:30vh;
    border:0;
    border-radius:10px;
    padding:1rem;
    margin-top:40rem;
    z-index:9999999;
    // -webkit-box-shadow: 1px 1px 10px 0px #FF0500; 
    box-shadow: 1px 1px 10px 0px #fd7e14
    ;
`
export const ContentForm = styled.div`
    // display:flex;
    // justify-content:center;
`
export const InputContainer = styled.div`
    display:flex;
    flex-direction:column;
    margin:1rem 0;
`

export const ButtonContainer = styled.div`
    // display:flex;
    // flex-direction:column;
    // margin:1rem 0;
`

export const Label = styled.label`
    font-size:1rem;
    margin-bottom:0.5rem;
`

export const Input = styled.input`
    font-size:1rem;
    margin-bottom:0.5rem;
    border-radius:4px;
    height:4.5vh;
    border:1px solid #fd7e14;
    padding-left:5px;

    &:focus{
        border:1px solid #fd5e14;
    }
`

export const InputSubmit = styled.input`
    font-size:1rem;
    font-weight:600;
    margin-bottom:0.5rem;
    border-radius:4px;
    height:4.5vh;
    width:25vw;
    background:#fd7e14;
    color:white;
    border:0;
    cursor:pointer;

    &:hover{
        background:#fd5e14;
    }
`