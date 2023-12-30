import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import * as userActions from '../../../redux/actions';
import userSelectors from '../../../redux/userSelectors';
import QuestView from './QuestView/QuestView';
import EditQuestView from './EditQuestView/EditQuestView';
import NewQuestView from './NewQuestView/NewQuestView';

const newId = () => uuidv4();
const getFireIconOn = (time, nowDate) =>
  new Date(time).getDay() < nowDate.getDay() &&
  new Date(time).getMonth() <= nowDate.getMonth() &&
  new Date(time).getFullYear() <= nowDate.getFullYear();

class QuestCardContainer extends Component {
  state = {
    updatedFields: {},
    mode: this.props.mode,
    difficulty: this.props.task.difficulty || 'Easy',
    dueDate: this.props.task.dueDate,
    done: this.props.task.done || false,
    category: this.props.task.category || 'STUFF',
    isPriority: this.props.task.isPriority,
    questName: this.props.task.name,
    isOpenDifficultySelect: false,
    isOpenGroupSelect: false,
    isDeleteModalOpen: false,
    isCompletedModalOpen: false,
    isFireIconOn: false,
    _id: this.props.task._id || newId(),
    isOpenCalendar: false,
    isNameQuestWrite: true,
  };

  componentDidMount() {
    const { dueDate } = this.state;

    this.setState({
      isFireIconOn: getFireIconOn(dueDate, new Date()),
    });
  }

  handleSaveSelectedGroupItem = (selectedItem) => {
    console.log('Selected group:', selectedItem);
    // Update the state with the selected group
    this.setState({
      category: selectedItem,
      isOpenGroupSelect: false,
    });
  };

  handleSaveSelectedDifficultyItem = (selectedItem) => {
    console.log('Selected difficulty:', selectedItem);
    // Your code to handle the selected difficulty
    this.setState({
      difficulty: selectedItem,
      isOpenDifficultySelect: false,
    });
  };

  toggleIsPriority = () => {
    this.setState((prevState) => ({
      isPriority: !prevState.isPriority,
    }));
  };

  toggleDeleteModal = () => {
    this.setState((prevState) => ({
      isDeleteModalOpen: !prevState.isDeleteModalOpen,
    }));
  };

  toggleOpenGroupSelect = () => {
    this.setState((prevState) => ({
      isOpenGroupSelect: !prevState.isOpenGroupSelect,
    }));
  };

  handleChangeDueDate = (newDueDate) => {
    this.setState({
      dueDate: newDueDate,
    });
  };

  handleChangeNameQuest = (newName) => {
    this.setState({
      questName: newName,
      isNameQuestWrite: newName.length >= 3, // Check if the quest name is at least 3 characters
    });
  };

  toggleIsOpenCalendar = () => {
    this.setState((prevState) => ({
      isOpenCalendar: !prevState.isOpenCalendar,
    }));
  };

   handleAddQuest = (newQuestData) => {
    // Handle the logic to add the quest using newQuestData
    console.log('Adding quest:', newQuestData);
    // ...

    // Additional logic if needed
    // ...
  };
  render() {
    const {
      mode,
      difficulty,
      dueDate,
      category,
      isPriority,
      name,
      done,
      isOpenDifficultySelect,
      isOpenGroupSelect,
      isDeleteModalOpen,
      isCompletedModalOpen,
      isFireIconOn,
      isOpenCalendar,
      isNameQuestWrite,
      isNewQuestVisible,
    } = this.state;

    const { addMode, finishAddMode, name: categoryName, userId, isEditMode } = this.props;
    const { isQuest } = this.props.task;

    return (
      <>
        {mode === 'render' && (
          <QuestView
            categoryName={categoryName}
            isFireIconOn={isFireIconOn}
            difficulty={difficulty}
            dueDate={dueDate}
            category={category}
            isPriority={isPriority}
            name={this.props.task.name}
            done={done}
            onModeEdit={this.onModeEdit}
          />
        )}
        {mode === 'edit' && isEditMode && (
          <EditQuestView
            isQuest={isQuest}
            toggleCompletedModal={this.toggleCompletedModal}
            isCompletedModalOpen={isCompletedModalOpen}
            isDeleteModalOpen={isDeleteModalOpen}
            // ... (existing props for EditQuestView)
            onSave={this.handleSaveQuest}
            onDelete={this.handleDeleteQuest}
            moveToDone={this.handleDoneQuest}
            toggleIsOpenCalendar={this.toggleIsOpenCalendar}
            isOpenCalendar={isOpenCalendar}
          />
        )}
        {addMode && mode === 'newQuest' && isNewQuestVisible && (
         <NewQuestView
         isNameQuestWrite={isNameQuestWrite}
         isQuest={isQuest}
         isOpenCalendar={isOpenCalendar}
         isPriority={isPriority}
         isEditMode={isEditMode}
         dueDate={dueDate}
         name={name}
         category={category}
         difficulty={difficulty}
         onSave={this.handleAddQuest}
         onDelete={this.handleCancelNewQuest}
         isDeleteModalOpen={isDeleteModalOpen}
         handleSaveSelectedDifficultyItem={this.handleSaveSelectedDifficultyItem}
         toggleIsOpenCalendar={this.toggleIsOpenCalendar}
         toggleDeleteModal={this.toggleDeleteModal}
         handleChangeNameQuest={this.handleChangeNameQuest}
         toggleIsPriority={this.toggleIsPriority}
         toggleOpenGroupSelect={this.toggleOpenGroupSelect}
         handleChangeDueDate={this.handleChangeDueDate}
         isOpenGroupSelect={isOpenGroupSelect}
         handleSaveSelectedGroupItem={this.handleSaveSelectedGroupItem}
         style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1000 }}
       />
        )}
      </>
    );
  }
}

QuestCardContainer.defaultProps = {
  mode: 'render',
  createdAt: '',
  difficulty: '',
  updatedAt: '',
  dueDate: '',
  category: '',
  _id: '',
  isEditMode: false,
};

QuestCardContainer.propTypes = {
  task: PropTypes.shape({
    difficulty: PropTypes.string,
    done: PropTypes.bool.isRequired,
    dueDate: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    isPriority: PropTypes.bool.isRequired,
    isQuest: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    _id: PropTypes.string,
  }),
  mode: PropTypes.string,
  isEditMode: PropTypes.bool.isRequired,
  name: PropTypes.string, // You may need to add this prop
};

const mapState = (state) => ({
  addMode: userSelectors.getAddMode(state),
  userId: userSelectors.userId(state),
  isEditMode: state.isEditMode,
  // Add other state mappings if needed
});

const mapDispatch = (dispatch) => ({
  addCard: (newQuest) => dispatch(userActions.createCard(newQuest)),
  saveCard: (oldQuest, savedQuest) => dispatch(userActions.editCard(oldQuest, savedQuest)),
  deleteCard: (param) => dispatch(userActions.deleteCard(param)),
  moveToDone: (questIsDone) => dispatch(userActions.completeCard(questIsDone)),
  // Add other dispatch mappings if needed
});

export default connect(mapState, mapDispatch)(QuestCardContainer);

