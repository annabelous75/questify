// Header.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import UserInfo from '../UserInfo/UserInfo';
import Logout from '../Logout/Logout';
import { getCards } from '../../redux/actions';

import styles from './Header.module.css';
import logo from '../../assets/logo/logo.png';

const Header = ({ user, exit, getCards }) => {
  useEffect(() => {
    const authToken = localStorage.getItem('accessToken');
    if (authToken) {
      getCards(authToken);
    }
  }, [getCards]);

  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <img className={styles.logostyle} src={logo} alt="Logo" />
        <div className={styles.userControl}>
          {user && <UserInfo user={user} />}
          {exit && <Logout exit={exit} />}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  exit: PropTypes.func,
  getCards: PropTypes.func.isRequired,
};

Header.defaultProps = {
  exit: null, // Provide a default value
};

const mapStateToProps = state => ({
  user: state.user || null,
});

const mapDispatchToProps = {
  getCards,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
