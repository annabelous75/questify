import React from 'react';
import PropTypes from 'prop-types';
import s from './CreateQuestButton.module.css';
import button from './Button';
const CreateQuestButton = ({ onClick }) => {
  const handleClick = () => {
    console.log('CreateQuestButton handleClick is called');
    if (onClick) {
      onClick();
    }
  };

  return (
    <button onClick={handleClick} className={s.button}>+
    </button>
  );
};

CreateQuestButton.propTypes = {
  onClick: PropTypes.func,
};

export default CreateQuestButton;

