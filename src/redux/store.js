import { configureStore } from '@reduxjs/toolkit';
import { cardReducer } from './cards/slice';
import { authReducer } from './auth/slice';
import cardOperations from './cards/operations';
import authOperations from './auth/operations';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    cards: cardReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

// Додавання обробників дій для операцій з картками до store
store.dispatch(cardOperations.editCard());
store.dispatch(cardOperations.deleteCard());
store.dispatch(cardOperations.getAllCards());
store.dispatch(cardOperations.completeCard());

// Додавання обробників дій для операцій з автентифікацією до store
store.dispatch(authOperations.register());
store.dispatch(authOperations.logIn());
store.dispatch(authOperations.logOut());
store.dispatch(authOperations.fetchCurrentUser());

export default store;
