import React from 'react';
import { Link } from 'react-router-dom';
import{Wrapper, Questify, Header, Login, Inputdiv, Desktopdiv, Input, ButtonLanding, ImageWhite, ImageGreen} from './Landing.styled';
import imagewhite from '../images/bg_.jpg';
import imagebig from '../images/green.jpg';
const Landing = () => {
  return (
    <Wrapper>
      <Questify>Questify</Questify>
      <Header>Questify will turn your life into
      a thrilling game full of amazing
      quests and exciting challenges.</Header>
      <Desktopdiv>
        <Login>Choose your name to sign up or log in</Login>
      <Inputdiv>
        <Input type="text" name="name"></Input>
      <Link to="/annabelous75/questify/dashboard">
        <ButtonLanding>go!</ButtonLanding>
      </Link>
      </Inputdiv></Desktopdiv>
      <ImageWhite src={imagewhite} alt="ImageWhite"/>
      <ImageGreen src={imagebig} alt="ImageBig"/>
    </Wrapper>
  );
};

export default Landing;
