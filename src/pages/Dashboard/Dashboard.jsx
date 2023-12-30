import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardsRow from '../../components/CardsRow/CardsRow';
import DoneCardsRow from '../../components/DoneCardsRow/DoneCardsRow';
import Header from '../../components/Header/Header';
import CreateQuestButton from '../../components/CreateQuestButton/CreateQuestButton';
import userSelectors from '../../redux/userSelectors';
import s from './Dashboard.module.css';
import * as userActions from '../../redux/actions'; // Імпортуйте ваші дії

class DashboardPage extends Component {
  state = {
    activeCard: '',
  };

  setActiveCard = () => {};

  handleClick = () => {
    console.log('handleCreateQuest is called');
    // Ваша логіка створення завдання
    const newQuest = {
      name: 'New Quest',  // Замініть це на реальні дані завдання
      // Інші дані завдання
    };

    this.props.addCard(newQuest); // Викликайте вашу дію для додавання завдання
    // Інші скидання стану
  };

  render() {
    const { today, tomorrow, done, allTheRest, addMode, exit } = this.props;
    return (
      <div className={s.dashboardContainer}>
        <Header exit={exit} />
        <CardsRow name="today" arr={today} type="today" addMode={addMode} />
        <CardsRow name="tomorrow" arr={tomorrow} />
        <CardsRow name="all the rest" arr={allTheRest} />
        <DoneCardsRow name="done" arr={done} />
        <CreateQuestButton onClick={this.handleClick} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  today: userSelectors.getTodayList(state),
  tomorrow: userSelectors.getTomorrowList(state),
  allTheRest: userSelectors.getAllTheRestList(state),
  done: userSelectors.getDoneList(state),
  addMode: userSelectors.getAddMode(state),
  exit: userSelectors.getExit(state),
});

const mapDispatchToProps = (dispatch) => ({
  addCard: (newQuest) => dispatch(userActions.createCard(newQuest)), // Викликайте вашу дію для додавання завдання
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
