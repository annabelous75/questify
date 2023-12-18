import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


const BASE_URL = 'https://questify-backend.goit.global';



export const createCard = createAsyncThunk('cards/createCard', async (cardData, thunkAPI) => {
  try {
    const response = await axios.post(`${BASE_URL}/card`, cardData);
    return response.data.createdCard;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});


export const editCard = createAsyncThunk('cards/editCard', async ({ cardId, cardData }, thunkAPI) => {
  try {
    const response = await axios.patch(`${BASE_URL}/card/${cardId}`, cardData);
    return response.data.editedCard;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

export const deleteCard = createAsyncThunk('cards/deleteCard', async (cardId, thunkAPI) => {
  try {
    await axios.delete(`${BASE_URL}/card/${cardId}`);
    return cardId;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

export const getAllCards = createAsyncThunk('cards/getAllCards', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${BASE_URL}/card`);
    return response.data.cards;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});


export const markCardComplete = createAsyncThunk(
  'cards/markCardComplete',
  async (cardId, thunkAPI) => {
    try {
      const response = await axios.patch(`${BASE_URL}/card/complete/${cardId}`);
      return response.data.editedCard;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const contactsOperations = {markCardComplete , createCard, editCard, getAllCards, deleteCard };
export default contactsOperations;