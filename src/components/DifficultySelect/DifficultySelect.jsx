// DifficultySelect.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './DifficultySelect.module.css';

const DifficultySelect = ({ difficulty, handleSaveSelectedDifficultyItem, isQuest }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState(difficulty);
  const [isOpen, setIsOpen] = useState(false);
  const difficulties = ['easy', 'normal', 'hard'];

  useEffect(() => {
    setSelectedDifficulty(difficulty);
  }, [difficulty]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectDifficulty = (item) => {
    setSelectedDifficulty(item);
    handleSaveSelectedDifficultyItem(item);
    toggleDropdown();
  };

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.selectedDifficulty} onClick={toggleDropdown}>
        {selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1)}
      </div>
      {isOpen && (
        <ul className={styles.list}>
          {difficulties.map((item) => (
            <li
              key={item}
              className={
                selectedDifficulty === item
                  ? isQuest
                    ? `${styles.listItem} ${styles.select}`
                    : `${styles.listItem} ${styles.whiteText} ${styles.challenge}`
                  : isQuest
                  ? styles.listItem
                  : `${styles.listItem} ${styles.challenge}`
              }
              onClick={() => handleSelectDifficulty(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

DifficultySelect.defaultProps = {
  difficulty: '',
  handleSaveSelectedDifficultyItem: () => {},
  isQuest: true
};

DifficultySelect.propTypes = {
  handleSaveSelectedDifficultyItem: PropTypes.func,
  difficulty: PropTypes.string,
  isQuest: PropTypes.bool
};

export default DifficultySelect;
