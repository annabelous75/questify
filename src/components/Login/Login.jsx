import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser } from '../../redux/actions';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ loginUser }) => {
  const [state, setState] = useState({
    nickname: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { nickname, email, password } = state;

    try {
      await loginUser({ email, password });

      localStorage.setItem('questifyNickname', nickname);
      setState({ nickname: '', email: '', password: '' });
      navigate('/annabelous75/questify/dashboard');
    } catch (error) {
      console.error('Authentication failed', error);
    }
  };

  return (
    <div className={styles.login_container}>
      <span className={styles.logo} />
      <p className={styles.login__slogan}>
        Questify will turn your life into a thrilling game full of amazing quests and exciting challenges.
      </p>
      <form className={styles.login_form} onSubmit={handleSubmit}>
        <label htmlFor="nickname" className={styles.login__label}>
          Choose your name to sign up or log in
          <input
            className={styles.login__input}
            onChange={handleChange}
            name="nickname"
            type="text"
            value={state.nickname}
            required
            minLength="5"
            placeholder=""
          />
        </label>
        <label htmlFor="email" className={styles.login__label}>
          Email
          <input
            id="email"
            className={styles.login__input}
            type="email"
            onChange={handleChange}
            name="email"
            value={state.email}
            required
          />
        </label>
        <label htmlFor="password" className={styles.login__label}>
          Password
          <input
            id="password"
            className={styles.login__input}
            type="password"
            onChange={handleChange}
            name="password"
            value={state.password}
            required
          />
        </label>
        <button className={styles.login_button} type="submit">
          Go!
        </button>
      </form>
    </div>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

export default connect(null, { loginUser })(Login);



