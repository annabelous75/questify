import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from './modal'; // Поправлен импорт модального окна
import { completeCardSuccess } from '../../redux/actions'; // Поправлен импорт действия

const sliceTextCompleted = (text) => {
  return text.length > 14 ? `${text.slice(0, 14)}...` : text;
};

const CompletedModal = ({ completeCardSuccess, moveToDone, name, isQuest }) => {
  return (
    <Modal
      clickContinue={() => {
        completeCardSuccess(); // Изменил вызов действия на completeCardSuccess
        moveToDone(); // Добавил вызов действия moveToDone, если оно нужно
      }}
      completedText={sliceTextCompleted(name)}
      isQuest={isQuest}
    />
  );
};

CompletedModal.propTypes = {
  isQuest: PropTypes.bool.isRequired,
  finishAddMode: PropTypes.func,
  moveToDone: PropTypes.func, // Добавил пропс для moveToDone, если он нужен
  name: PropTypes.string.isRequired,
};

CompletedModal.defaultProps = {
  finishAddMode: () => null,
  moveToDone: () => null, // Задал дефолтное значение для moveToDone
};

const mapDispatchToProps = (dispatch) => {
  return {
    completeCardSuccess: () => dispatch(completeCardSuccess()), // Изменил действие на completeCardSuccess
    moveToDone: () => {
      // Ваша реализация, если нужна
    },
  };
};

export default connect(null, mapDispatchToProps)(CompletedModal);
