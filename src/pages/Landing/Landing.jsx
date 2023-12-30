import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../../components/Login/Login';
import s from './Landing.module.css';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className={s.loginPage}>
      <Login history={navigate} />
    </div>
  );
};

export default Landing;
