import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserInfo.module.css';

const UserInfo = ({ user }) => {
  const getUser = name => (typeof name === 'string' ? name.slice(0, 1) : '');

  return (
    <div className={styles.user}>
      <i className={styles.circle}>{getUser(user)}</i>
      <p className={styles.name}>{user ? `${user}'s Quest Log` : "Guest's Quest Log"}</p>
    </div>
  );
};

UserInfo.propTypes = {
  user: PropTypes.string.isRequired,
};

export default UserInfo;
