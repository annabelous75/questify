// actions.js
import * as actionTypes from './actionTypes';
import api from '../services/api'; 

// Authentication Actions

export const registerSuccess = (userData) => ({
    type: actionTypes.REGISTER_SUCCESS,
    payload: userData,
  });
  
  export const registerFailure = (error) => ({
    type: actionTypes.REGISTER_FAILURE,
    payload: error,
  });
  
  export const registerUser = (userData) => async (dispatch) => {
    try {
      const response = await api.register(userData);
      dispatch(registerSuccess(response));
    } catch (error) {
      dispatch(registerFailure(error));
    }
  };
  
  // Login User
  export const loginSuccess = (userData) => ({
    type: actionTypes.LOGIN_SUCCESS,
    payload: userData,
  });
  
  export const loginFailure = (error) => ({
    type: actionTypes.LOGIN_FAILURE,
    payload: error,
  });
  
  export const loginUser = (userData) => async (dispatch) => {
    try {
      const response = await api.login(userData);
      dispatch(loginSuccess(response.userData)); // Используйте только данные пользователя
      return response.userData; // Возвращайте только данные пользователя
    } catch (error) {
      dispatch(loginFailure(error));
      throw error; // Бросайте ошибку для обработки в компоненте
    }
  };
  
  
  // Logout User
  export const logoutSuccess = () => ({
    type: actionTypes.LOGOUT_SUCCESS,
  });
  
  export const logoutFailure = (error) => ({
    type: actionTypes.LOGOUT_FAILURE,
    payload: error,
  });
  
  export const logoutUser = () => async (dispatch) => {
    try {
      await api.logout();
      dispatch(logoutSuccess());
    } catch (error) {
      dispatch(logoutFailure(error));
    }
  };
  
  // Refresh Tokens
  export const refreshTokensSuccess = (tokens) => ({
    type: actionTypes.REFRESH_TOKEN_SUCCESS,
    payload: tokens,
  });
  
  export const refreshTokensFailure = (error) => ({
    type: actionTypes.REFRESH_TOKEN_FAILURE,
    payload: error,
  });
  
  export const refreshTokens = (sid) => async (dispatch) => {
    try {
      const response = await api.refreshTokens(sid);
      dispatch(refreshTokensSuccess(response));
    } catch (error) {
      dispatch(refreshTokensFailure(error));
    }
  };
  
  // Create Card
  export const createCardSuccess = (card) => ({
    type: actionTypes.CREATE_CARD_SUCCESS,
    payload: card,
  });
  
  export const createCardFailure = (error) => ({
    type: actionTypes.CREATE_CARD_FAILURE,
    payload: error,
  });
  
  export const createCard = (cardData) => async (dispatch) => {
    try {
      const response = await api.createCard(cardData);
      dispatch(createCardSuccess(response));
    } catch (error) {
      dispatch(createCardFailure(error));
    }
  };
  
  // Edit Card
  export const editCardSuccess = (editedCard) => ({
    type: actionTypes.EDIT_CARD_SUCCESS,
    payload: editedCard,
  });
  
  export const editCardFailure = (error) => ({
    type: actionTypes.EDIT_CARD_FAILURE,
    payload: error,
  });
  
  export const editCard = (cardId, cardData) => async (dispatch) => {
    try {
      const response = await api.editCard(cardId, cardData);
      dispatch(editCardSuccess(response));
    } catch (error) {
      dispatch(editCardFailure(error));
    }
  };
  
  // Delete Card
  export const deleteCardSuccess = (cardId) => ({
    type: actionTypes.DELETE_CARD_SUCCESS,
    payload: cardId,
  });
  
  export const deleteCardFailure = (error) => ({
    type: actionTypes.DELETE_CARD_FAILURE,
    payload: error,
  });
  
  export const deleteCard = (cardId) => async (dispatch) => {
    try {
      await api.deleteCard(cardId);
      dispatch(deleteCardSuccess(cardId));
    } catch (error) {
      dispatch(deleteCardFailure(error));
    }
  };
  
  // Get Cards
  export const getCardsSuccess = (cards) => ({
    type: actionTypes.GET_CARDS_SUCCESS,
    payload: cards,
  });
  
  export const getCardsFailure = (error) => ({
    type: actionTypes.GET_CARDS_FAILURE,
    payload: error,
  });
  
  export const getCards = () => async (dispatch) => {
    try {
      const response = await api.getCards();
      dispatch(getCardsSuccess(response.cards));
    } catch (error) {
      dispatch(getCardsFailure(error));
    }
  };
  
  // Complete Card
  export const completeCardSuccess = (editedCard) => ({
    type: actionTypes.COMPLETE_CARD_SUCCESS,
    payload: editedCard,
  });
  
  export const completeCardFailure = (error) => ({
    type: actionTypes.COMPLETE_CARD_FAILURE,
    payload: error,
  });
  
  export const completeCard = (cardId) => async (dispatch) => {
    try {
      const response = await api.completeCard(cardId);
      dispatch(completeCardSuccess(response));
    } catch (error) {
      dispatch(completeCardFailure(error));
    }
  };