import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './operations';
const initialState = {
  cards: [],
  error: null,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(contactsOperations.createCard.fulfilled, (state, action) => {
        state.cards.push(action.payload);
      })
      .addCase(contactsOperations.editCard.fulfilled, (state, action) => {
        const index = state.cards.findIndex((card) => card._id === action.payload._id);
        if (index !== -1) {
          state.cards[index] = action.payload;
        }
      })
      .addCase(contactsOperations.deleteCard.fulfilled, (state, action) => {
        state.cards = state.cards.filter((card) => card._id !== action.payload);
      })
      .addCase(contactsOperations.getAllCards.fulfilled, (state, action) => {
        state.cards = action.payload;
      })
      .addCase(contactsOperations.markCardComplete.fulfilled, (state, action) => {
        const index = state.cards.findIndex((card) => card._id === action.payload._id);
        if (index !== -1) {
          state.cards[index] = action.payload;
        }
      })
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.error = action.payload.error;
        }
      );
  },
});

export const authReducer = cardsSlice.reducer;
export default cardsSlice;