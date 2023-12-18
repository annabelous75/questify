import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import image from '../images/11667041_20943401.jpg';
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url(${image}) center/cover no-repeat;
  position: relative;
  background-color: rgba(128, 128, 128, 0.5);
`;



export const FormContainer = styled.div`
  background-color: var(--primary-background-color);
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  text-align: center;
  color:var(--accent-color-questify);
  margin-bottom:15px;
`;

export const ErrorMessage = styled.p`
  color: var(--color-warning);
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:placeholder{
    color:var(--accent-color-questify);
  }
`;
export const InputLabel = styled.label`
  color: var(--main-text);
  margin-bottom: 5px;
`;
export const Button = styled.button`
  align-self: center;
  padding: 10px;
  background-color: var(--button-background-color);
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  margin-left:9px;
  margin-top:5px;
  &:hover {
    background-color: var(--secondary-text);
  }
`;
export const ButtonLogin = styled.button`
  align-self: center;
  padding: 10px;
  background-color: var(--button-background-color);
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  margin-left:150px;
  margin-top:5px;
  &:hover {
    background-color: var(--secondary-text);
  }
`;
export const ButtonLog = styled.a`
  align-self: center;
  color: var(--button-background-color);
  cursor: pointer;
  border: none;
  border-radius: 4px;
  margin-left:10px;
  &:hover {
    color: var(--secondary-text);
  }
`;
export const Divflex=styled.div `
display:flex;
gap:10px;
margin-top:15px;
margin-left:45px;`;
