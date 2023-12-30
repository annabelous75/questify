import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

import userSelectors from '../../redux/userSelectors';
import QuestCardContainer from './QuestCardContainer/QuestCardContainer';

// Define the function newId
const newId = () => uuidv4();

const defaultTask = {
  difficulty: 'Easy',
  done: false,
  dueDate: moment(new Date()).format('YYYY-MM-DDTHH:mm:ss.sssZ'),
  group: 'Stuff',
  isPriority: false,
  isQuest: true,
  name: ''
};

const CardContainer = ({ task = { ...defaultTask, _id: newId() }, mode, name, addMode }) => {
  return (
    <>
      {task.isQuest && <QuestCardContainer mode={mode} name={name} task={task} addMode={addMode} />}
    </>
  );
};

CardContainer.defaultProps = {
  isPriority: false,
  challengeSendToUser: false,
  createdAt: '',
  updatedAt: '',
  difficulty: '',
  done: false,
  dueDate: '',
  name: '',
  group: '',
  _id: '',
  isQuest: true
};

CardContainer.propTypes = {
  task: PropTypes.shape({
    challengeSendToUser: PropTypes.bool,
    difficulty: PropTypes.string,
    done: PropTypes.bool,
    dueDate: PropTypes.string,
    group: PropTypes.string,
    isPriority: PropTypes.bool,
    isQuest: PropTypes.bool,
    name: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    _id: PropTypes.string
  }),
  mode: PropTypes.string.isRequired
};

const mapState = state => ({
  addMode: userSelectors.getAddMode(state)
});

export default connect(mapState)(CardContainer);
