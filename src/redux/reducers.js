// reducers.js
import * as actionTypes from './actionTypes';

const initialState = {
  user: null,
  cards: [],
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Authentication Reducers
    case actionTypes.REGISTER_SUCCESS:
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
      };

    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        error: null,
      };

    case actionTypes.REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        user: { ...state.user, ...action.payload },
        error: null,
      };

    case actionTypes.REGISTER_FAILURE:
    case actionTypes.LOGIN_FAILURE:
    case actionTypes.LOGOUT_FAILURE:
    case actionTypes.REFRESH_TOKEN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    // Card Reducers
    case actionTypes.CREATE_CARD_SUCCESS:
      return {
        ...state,
        cards: [...state.cards, action.payload.createdCard],
        error: null,
      };

    case actionTypes.EDIT_CARD_SUCCESS:
    case actionTypes.COMPLETE_CARD_SUCCESS:
      const updatedCards = state.cards.map((card) =>
        card._id === action.payload.editedCard._id ? action.payload.editedCard : card
      );
      return {
        ...state,
        cards: updatedCards,
        error: null,
      };

    case actionTypes.DELETE_CARD_SUCCESS:
      // Implement logic to delete a card from state
      return {
        ...state,
        error: null,
      };

    case actionTypes.GET_CARDS_SUCCESS:
      return {
        ...state,
        cards: action.payload.cards,
        error: null,
      };

    case actionTypes.CREATE_CARD_FAILURE:
    case actionTypes.EDIT_CARD_FAILURE:
    case actionTypes.DELETE_CARD_FAILURE:
    case actionTypes.GET_CARDS_FAILURE:
    case actionTypes.COMPLETE_CARD_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
