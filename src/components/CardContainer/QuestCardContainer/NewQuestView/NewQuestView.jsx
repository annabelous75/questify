import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import DeleteQuestModal from '../../../DeleteQuestModal/DeleteQuestModal';
import DifficultySelect from '../../../DifficultySelect/DifficultySelect';
import GroupSelect from '../../../GroupSelect/GroupSelect';
import s from './NewQuestView.module.css';
import activeStar from '../../../../assets/images/icons/star/favourites-filled-star-symbol-active.svg';
import notActiveStar from '../../../../assets/images/icons/star/favourites-filled-star-symbol-not-active.svg';
import dropDownArrow from '../../../../assets/images/icons/drop-down-arrow.png';
import CalendarIcon from '../../../../assets/images/icons/calendarSvg/CalendarSvg';
import CloseSvg from '../../../../assets/images/icons/closeSvg/CloseSvg';
import CreateQuestButton from 'components/CreateQuestButton/CreateQuestButton';
const PickerInput = ({ onChange, openCalendar, ...restProps }) => {
  const handleInputChange = (event) => {
    onChange(event);
  };

  return (
    <div>
      <input onChange={handleInputChange} {...restProps} />
      <button onClick={openCalendar} className={s.pickerIcon}>
        <CalendarIcon className={s.calendarIcon} />
      </button>
    </div>
  );
};

const NewQuestView = ({
  difficulty,
  dueDate,
  category,
  toggleIsPriority,
  isPriority,
  handleAddQuest,
  toggleDifficultySelect,
  isOpenDifficultySelect,
  toggleOpenGroupSelect,
  isOpenGroupSelect,
  handleChangeNameQuest,
  handleChangeDueDate,
  handleSaveSelectedDifficutlyItem,
  isDeleteModalOpen,
  toggleDeleteModal,
  onDelete,
  toggleIsOpenCalendar,
  isOpenCalendar,
  isQuest,
  isNameQuestWrite,
  style, // Додав новий prop для стилізації компонента
}) => {
  const [name, setName] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('');

  const handleSaveSelectedGroupItem = (group) => {
    setSelectedGroup(group);
    // Additional logic if needed
  };
  const handleCreateQuest = () => {
    console.log('handleCreateQuest is called');
    // Ваша логика создания задачи
    handleAddQuest();
    setName('');
    setSelectedGroup('');
    // Другие сбросы состояний
  };

  return (
    <div
      className={`${s.card} ${style}`} // Додав стилізацію
      onClick={
        isOpenGroupSelect
          ? toggleOpenGroupSelect
          : isOpenDifficultySelect
          ? toggleDifficultySelect
          : () => {}
      }
    >
      <header className={s.cardHeader}>
        <div className={s.difficultySelect_container} onClick={toggleDifficultySelect}>
          <DifficultySelect
            handleSaveSelectedDifficutlyItem={handleSaveSelectedDifficutlyItem}
            isOpenDifficultySelect={isOpenDifficultySelect}
            difficulty={difficulty}
          />
          <img className={s.dropDownArrow} src={dropDownArrow} alt="dropDownArrow" />
        </div>
        <div className={s.starContainer} onClick={toggleIsPriority}>
          <img className={s.star} src={isPriority ? activeStar : notActiveStar} alt="star" />
        </div>
      </header>
      <main className={s.cardMain}>
        <input
          minLength="3"
          required
          autoFocus
          className={s.title}
          onChange={(event) => {
            setName(event.target.value);
            handleChangeNameQuest(event);
          }}
          value={name}
          placeholder="Enter quest name"
        />
        <div className={s.dateTimeContainer}>
          <Datetime
            dateFormat="DD.MM.YYYY"
            onChange={handleChangeDueDate}
            defaultValue={moment(dueDate)}
            open={isOpenCalendar}
            onFocus={toggleIsOpenCalendar}
            locale={window.navigator.language}
            renderInput={PickerInput}
          />
        </div>
      </main>
      <footer className={s.cardFooter}>
        <div
          className={s.groupsContainer}
          onClick={(e) => {
            e.stopPropagation();
            toggleOpenGroupSelect();
          }}
        >
          <img className={s.ArrowForGroupSelect} src={dropDownArrow} alt="dropDownArrow" />
          <GroupSelect
            handleSaveSelectedGroupItem={handleSaveSelectedGroupItem}
            isOpenGroupSelect={isOpenGroupSelect}
            category={selectedGroup}
          />
        </div>

        <div className={s.toolsContainer}>
          <CloseSvg className={s.closeSvg} onClick={toggleDeleteModal} />
          <div className={s.strip} />
          <p className={s.start} onClick={handleAddQuest}>
            start
            {isNameQuestWrite ? null : <span className={s.hint}>Enter quest name!</span>}
          </p>
        </div>
      </footer>

      {isDeleteModalOpen && <DeleteQuestModal isQuest={isQuest} onDelete={onDelete} onCancelDel={toggleDeleteModal} />}
      <CreateQuestButton  />
    </div>
  );
};

NewQuestView.propTypes = {
  isNameQuestWrite: PropTypes.bool.isRequired,
  isQuest: PropTypes.bool.isRequired,
  isOpenCalendar: PropTypes.bool.isRequired,
  toggleIsOpenCalendar: PropTypes.func.isRequired,
  toggleDeleteModal: PropTypes.func.isRequired,
  isDeleteModalOpen: PropTypes.bool.isRequired,
  handleSaveSelectedGroupItem: PropTypes.func.isRequired,
  handleSaveSelectedDifficutlyItem: PropTypes.func.isRequired,
  handleChangeDueDate: PropTypes.func.isRequired,
  handleChangeNameQuest: PropTypes.func.isRequired,
  isOpenGroupSelect: PropTypes.bool.isRequired,
  toggleOpenGroupSelect: PropTypes.func.isRequired,
  toggleIsPriority: PropTypes.func.isRequired,
  difficulty: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  isPriority: PropTypes.bool.isRequired,
  style: PropTypes.object, // Додав новий prop для стилізації компонента
};

export default NewQuestView;
