import { createSlice } from '@reduxjs/toolkit';
import cardOperations from './operations';

const initialState = {
  cards: [], // Масив карток користувача
  isFetchingCards: false,
};

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  extraReducers: {
    [cardOperations.editCard.fulfilled](state, action) {
      // Оновити інформацію про картку після успішного PATCH-запиту
      const updatedCard = action.payload.updatedCard;
      state.cards = state.cards.map(card => (card.id === updatedCard.id ? updatedCard : card));
    },
    [cardOperations.deleteCard.fulfilled](state, action) {
      // Видалити картку після успішного DELETE-запиту
      const deletedCardId = action.payload.deletedCardId;
      state.cards = state.cards.filter(card => card.id !== deletedCardId);
    },
    [cardOperations.getAllCards.pending](state) {
      // Позначити, що розпочалася отримання всіх карток
      state.isFetchingCards = true;
    },
    [cardOperations.getAllCards.fulfilled](state, action) {
      // Оновити стан з отриманими картками після успішного GET-запиту
      state.cards = action.payload.cards;
      state.isFetchingCards = false;
    },
    [cardOperations.getAllCards.rejected](state) {
      // Зупинити відзначення, що розпочалася отримання всіх карток у випадку відмови
      state.isFetchingCards = false;
    },
    [cardOperations.completeCard.fulfilled](state, action) {
      // Оновити інформацію про картку після успішного PATCH-запиту на позначення картки як завершеної
      const completedCard = action.payload.completedCard;
      state.cards = state.cards.map(card => (card.id === completedCard.id ? completedCard : card));
    },
  },
});

export const cardReducer = cardSlice.reducer;
export default cardSlice.reducer;
