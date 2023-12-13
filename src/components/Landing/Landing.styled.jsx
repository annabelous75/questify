import styled from 'styled-components';
export const Wrapper=styled.div`
width:375px;
padding-left:20px;
padding-right:20px;
@media screen and (min-width: 768px) {
    width:768px;
padding-left:32px;
padding-right:32px;
}
@media screen and (min-width: 1280px) {
    width:1280px;
padding-left:229px;
padding-right:32px;
}
`;

export const Questify= styled.h3`
display:none;
@media screen and (min-width: 768px) {
    display:block;
    font-family: 'Poppins', sans-serif;
color: var(--accent-color-questify);
text-align: left;
font-size: 20px;
font-weight: 700;
line-height: 20px;
letter-spacing: 0.02em;
margin-top:342px;
}
@media screen and (min-width: 1280px) {
    display:block;
    font-family: 'Poppins', sans-serif;
color: var(--accent-color-questify);
font-size: 24px;
font-weight: 700;
line-height: 24px;
letter-spacing: 0.02em;
text-align: left;
margin-top:200px;
}
`;
export const Header=styled.h1 `
font-family: 'Poppins', sans-serif;
font-size: 18px;
font-weight: 700;
line-height: 29px;
letter-spacing: 0.02em;
text-align: left;
color: var(--loading-main-text);
margin-top:60px;
@media screen and (min-width: 768px){
    font-size: 24px;
    line-height: 33px;
    margin-top:40px;
}
@media screen and (min-width: 1280px){
    font-size: 24px;
    line-height: 33px;
    margin-top:80px;
}
`;
export const Login=styled.p`
font-family: 'Poppins', sans-serif;
font-size: 14px;
font-weight: 400;
line-height: 45px;
letter-spacing: 0.02em;
text-align: left;
margin-top:32px;
color:var(--secondary-text);
@media screen and (min-width: 768px){
    font-size: 18px;
    margin-top:40px;
}
@media screen and (min-width: 1280px){
    font-size: 18px;
    margin-top:35px;
}
`;
export const Inputdiv=styled.div`
display:flex;
gap:10px;
`;
export const Desktopdiv=styled.div `
display:block;
@media screen and (min-width: 1280px){
    display:flex;
    gap:10px;
}
`;
export const Input=styled.input `
border: none;
  border-bottom: 1px solid var(--accent-color-questify);
  outline: none;
  background: none;
  position: relative;
  color: var(--accent-color-questify);
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--accent-color-questify);
  }
`;
export const ButtonLanding=styled.button`
border-radius:50%;
width:52px;
height:52px;
background-color:var(--button-background-color);
color: var(--primary-background-color);
border: none;
cursor: pointer;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
font-family: 'Poppins', sans-serif;
font-size: 18px;
font-weight: 700;
`;
export const ImageWhite=styled.img `
width:708px;
height:500px;
margin-top:150px;
margin-left:600px;
transform: rotate(-45deg);
`;
export const ImageGreen=styled.img `
width:708px;
height:500px;
margin-left:515px;
margin-top:-600px;
transform: rotate(-145deg);
`;
